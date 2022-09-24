const fs = require('fs')
const path = require('path')
const glob = require('glob');

// This file dynamically generates cached JSON from MDX files

const toKebab = (str) => str.replace(/\s+/g, '-').toLowerCase();

function makeCache(jsxTransformations) {

  const makeIndex = async () => {
    // NOTE: first prepare the directory
    try {
      fs.rmSync('./src/search/cache', {
        recursive: true,
        force: true
      });
      fs.mkdirSync('./src/search/cache')
    } catch (e) {
      fs.mkdirSync('./src/search/cache')
    }

    const invertedIndex = {}

    const pages = await glob.sync('**/*.mdx', { cwd: './src/pages/docs' });

    if (pages && Array.isArray(pages) && pages.length > 0) {
      pages.forEach((filePath) => {
        let pageContents = fs.readFileSync(path.join('./src/pages/docs', filePath), 'utf8');

        // NOTE: sanitize the MDX
        // first get only parts of the MDX files that are actual content, as indicated by the DOC_START and DOC_END keywords
        pageContents = pageContents.split("{/* DOC_START */}")[1] || pageContents; // NOTE: safely remove the js imports at the beginning of each doc
        pageContents = pageContents.split("{/* DOC_END */}")[0] // NOTE: remove the raw jsx at the end of each file

        // apply react component transformations
        if (jsxTransformations) {
          Object.keys(jsxTransformations).forEach((componentName) => {
            // NOTE same as above
            const regexSelfClosing = new RegExp(`<${componentName}[\\s\\S]*?/>`, "gm"); // include multiline
            const matches = [...pageContents.matchAll(regexSelfClosing)];

            if (matches.length > 0) {
              let prevIndex = 0;
              let transformedPage = '';

              for (const match of matches) {
                const indexOfMatch = match.index;
                const transformedText = jsxTransformations[componentName](match[0]);
                transformedPage += pageContents.slice(prevIndex, indexOfMatch) + transformedText;

                const isLastMatch = matches.indexOf(match) === matches.length - 1;
                if (isLastMatch) {
                  transformedPage += pageContents.slice(indexOfMatch + match[0].length);
                }

                prevIndex = indexOfMatch + match[0].length;
              }

              pageContents = transformedPage;
            }
          });
        }

        // if (filePath === 'collapsibles/api.mdx') console.log(pageContents);

        sanitizedPage = pageContents
          .replace(/```[\s\S]*?```/g, '') // NOTE: remove all code blocks
          .replace(/ *\([^)]*\)*/g, '') // remove parenthesis content if a link i.e. [title](url)
          .replace(/[\[\]`]+/g, '') // remove unwanted special characters, i.e. brackets and backticks
          .replace(' .', '.') // cleanup space empty space before punctuation
          .replace(/\n{2,}/g, '\n')// replace all consecutive newlines with a single newline
        // .replace(/<[^>]*\/>/g, '') // remove self-closing react components

        // NOTE: prepare the folder structure to be written into
        const pathSegments = filePath.split('/');
        pathSegments.forEach((segment, index) => {
          const pathToCheck = pathSegments.slice(0, index + 1).join('/');
          if (!pathToCheck.endsWith('.mdx')) {
            try {
              fs.readdirSync(`./src/search/cache/${pathToCheck}`)
            } catch (e) {
              fs.mkdirSync(`./src/search/cache/${pathToCheck}`)
            }
          }
        })

        // Split file by heading, then cache each heading in its own file, i.e. "page#heading.json"
        var regex = new RegExp('\n#', 'gi');
        let breadcrumbs = [];
        let prevHeadingSize = 0;

        while (match = regex.exec(sanitizedPage)) {
          // first extract only the heading text
          const indexOfMatch = regex.lastIndex;
          const textAfterMatch = sanitizedPage.slice(indexOfMatch);
          const indexOfNewline = textAfterMatch.indexOf("\n");

          // determine heading size in order to build the breadcrumbs
          const numberOfHashes = textAfterMatch.match(/^[^\s]+/)?.[0].length || 0; // NOTE: the original regex removed the first hash
          const headingSize = numberOfHashes + 1; // i.e. h1, h2, etc

          const headingText = textAfterMatch
            .slice(0, indexOfNewline)
            .replace(/[{(`"'.,#;/\\<>—:@)}]/g, '') // remove unwanted special characters (text-only headings)
            .trim();

          // NOTE: build the breadcrumbs based on heading sizes
          if (headingSize > prevHeadingSize) breadcrumbs.push(headingText); // only push cascading headings into the breadcrumbs
          if (prevHeadingSize === headingSize) breadcrumbs[breadcrumbs.length - 1] = headingText; // replace the last breadcrumb if the heading size is the same
          if (headingSize < prevHeadingSize) breadcrumbs = [breadcrumbs[0], headingText]; // if the heading size is smaller, start over
          prevHeadingSize = headingSize;

          const kebabHeading = toKebab(headingText);

          // find markdown headings leading up to this one and concatenate them
          // const indexOfPrevHeading = sanitizedPage.slice(0, indexOfMatch).lastIndexOf("# ");
          // const allHeadings = `${prevHeading} - ${headingText}`;
          // prevHeading = headingText;

          // NOTE: splice only the contents this heading to write to the file
          const contentAfterHeading = textAfterMatch.slice(indexOfNewline);
          const nextHeadingIndex = contentAfterHeading.indexOf('\n#');

          let cacheContents = ''
          if (nextHeadingIndex > -1) {
            cacheContents = contentAfterHeading.slice(0, nextHeadingIndex);
          } else {
            cacheContents = contentAfterHeading;
          }

          const sanitizedCache = cacheContents
            .replace(/^\s+/, '') // remove leading whitespace (including newlines)
            .replace(/\s+$/, '') // remove trailing whitespace (including newlines)

          // Prepare the files and folders to be written
          const cachePath = `/${filePath.replace('.mdx', '')}#${kebabHeading}`;

          // Now send this page up to the inverted index by searching is contents for keywords and reporting the url
          const wordsToCache = [
            ...headingText.split(' ') || [],
            ...sanitizedCache.split(' ') || []
          ];

          wordsToCache.forEach(incomingWord => {
            const word = incomingWord.toLowerCase()
            // NOTE: remove empty lines and multilines, returns [ '\n', '\n', '\n', '\n' ]
            // do this here instead of above to avoid concatenating unrelated words
            const isEmptyLines = word.match(/\n/g);

            // NOTE: only index words that are 3 characters or more
            if (word && word.length >= 3 && !isEmptyLines) {

              const sanitizedWord = word
                // .replace(/\(.*\)/, '') // remove parenthesis content if a link i.e. [title](url)
                .replace(/[,.]+/g, '') // remove unwanted special characters, i.e. punctuation

              // NOTE: now split the word into all of its fragments to enable partial word matches
              // i.e. [ 'face', 'facele', 'faceles', 'faceless', 'facelessu', 'facelessui' ]
              // const wordFragments = sanitizedWord.split('').reduce((acc, letter, i) => {
              //   if (i >= 2) {
              //     const wordFragment = sanitizedWord.slice(0, i + 1);
              //     acc.push(wordFragment);
              //   }
              //   return acc;
              // }, []);

              const wordFragments = [sanitizedWord];

              if (wordFragments && Array.isArray(wordFragments) && wordFragments.length > 0) {
                wordFragments.forEach(wordFragment => {
                  if (!invertedIndex[wordFragment]) {
                    // word is not yet indexed
                    invertedIndex[wordFragment] = [cachePath]
                  } else if (!invertedIndex[wordFragment].includes(cachePath)) {
                    // NOTE: page is not yet indexed on this word
                    invertedIndex[wordFragment].push(cachePath);
                  }
                })
              }
            }
          })

          const json = JSON.stringify({
            title: breadcrumbs.join(' - '),
            content: sanitizedCache
          });

          // NOTE: write the file
          // TODO: do this synchronously
          try {
            fs.writeFile(`./src/search/cache${cachePath}.json`, json, function (err) {
              if (err) return console.log(err);
              // console.log("Doc cached.");
            })
          } catch (e) {
            console.error(e)
          }
        }
      });
    }

    const indexAsJSON = JSON.stringify(invertedIndex);

    fs.writeFile('./src/search/cache/index.json', indexAsJSON, function (err) {
      if (err) return console.log(err);
      // console.log("Inverted index created.");
    });

    console.log("Cache generated.");
  }

  makeIndex();
}

makeCache({
  'PropName': (string) => {
    const propName = string.match(/name="(.*)"/)?.[1];
    return `${propName}\n` || 'PROP_NAME'
  },
  'InstallationCode': () => '',
  'ClassPrefix': () => '',
  'BasicProps': () => 'BASIC_PROPS',
  'BasicContext': () => 'BASIC_CONTEXT',
  'PackageInfo': () => '',
  // 'JumplistNode': (arg) => 'JUMPLIST_NODE', // NOTE: this one is tricker because it's not self-closing
});
