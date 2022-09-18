const fs = require('fs')
const path = require('path')
const glob = require('glob')

// This file dynamically generates cached JSON from MDX files

const toKebab = (str) => str.replace(/\s+/g, '-').toLowerCase();
const removePunctuation = (string) => {
  return string
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ");
};

function makeCache() {
  const makeIndex = async () => {
    // NOTE: first prepare the directory
    try {
      fs.rmSync('search/cache', { recursive: true, force: true });
      fs.mkdirSync('search/cache')
    } catch (e) {
      fs.mkdirSync('search/cache')
    }

    const invertedIndex = {}

    const pages = await glob.sync('**/*.mdx', { cwd: 'src/pages/docs' });

    if (pages && Array.isArray(pages) && pages.length > 0) {
      pages.forEach((filePath) => {
        let pagePath = filePath
          .replace('.mdx', '');

        let pageContents = fs.readFileSync(path.join('src/pages/docs', filePath), 'utf8');

        // NOTE: sanitize the MDX
        // first get only parts of the MDX files that are actual content, as indicated by the DOC_START and DOC_END keywords
        pageContents = pageContents.split("{/* DOC_START */}")[1] || pageContents; // NOTE: safely remove the js imports at the beginning of each doc
        pageContents = pageContents.split("{/* DOC_END */}")[0] // NOTE: remove the raw jsx at the end of each file

        sanitizedPage = pageContents
          .replace(/```[\s\S]*?```/g, '') // NOTE: remove all code blocks
          .replace(/\(.*\)/g, '') // remove parenthesis content if a link i.e. [title](url)
          .replace(/[\[\]`]+/g, '') // remove unwanted special characters, i.e. brackets and backticks
          .replace(/<[^>]*\/>/g, '') // remove self-closing react components

        // TODO: remove non-self closing react components

        // NOTE: prepare the folder structure to be written into
        const pathSegments = filePath.split('/');
        pathSegments.forEach((segment, index) => {
          const pathToCheck = pathSegments.slice(0, index + 1).join('/');
          if (!pathToCheck.endsWith('.mdx')) {
            try {
              fs.readdirSync(`search/cache/${pathToCheck}`)
            } catch (e) {
              fs.mkdirSync(`search/cache/${pathToCheck}`)
            }
          }
        })

        // Split file by heading, then cache each heading in its own file, i.e. "page#heading.json"
        var regex = new RegExp('# ', 'gi');
        while (regex.exec(sanitizedPage)) {
          // first extract only the heading text
          const indexOfMatch = regex.lastIndex;
          const textAfterMatch = sanitizedPage.slice(indexOfMatch);
          const indexOfNewline = textAfterMatch.indexOf("\n");
          const fullText = textAfterMatch
            .slice(0, indexOfNewline)
            .replace(/[{(`"'.,#;/\\<>—:@)}]/g, '') // remove unwanted special characters
            .trim();

          const kebabHeading = toKebab(fullText);

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
          sanitizedCache
            .split(" ").forEach(incomingWord => {
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

          const json = JSON.stringify(sanitizedCache);

          // NOTE: write the file
          // TODO: do this synchronously
          try {
            fs.writeFile(`search/cache${cachePath}.json`, json, function (err) {
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

    fs.writeFile('search/cache/index.json', indexAsJSON, function (err) {
      if (err) return console.log(err);
      // console.log("Inverted index created.");
    });

    console.log("Cache generated.");
  }

  makeIndex();
}

makeCache();
