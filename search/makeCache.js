const fs = require('fs')
const path = require('path')
const glob = require('glob')

// This file dynamically generates cached JSON from MDX files

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

        pageContents
          .split("{/* DOC_END */}")[0] // NOTE: remove the raw jsx at the end of each file
          .replace(/```[\s\S]*?```/g, '') // NOTE: remove all code blocks
          .replace(/[{(`"'.,#;—:@)}]/g, '') // NOTE: remove unwanted special characters

        const pageAsJSON = JSON.stringify(pageContents);

        const pageCachePath = `search/cache/${filePath.replace('.mdx', '.json')}`;

        // NOTE: first prepare the folder structure to write files into
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

        // NOTE: write the file
        // TODO: do this synchronously
        try {
          fs.writeFile(pageCachePath, pageAsJSON, function (err) {
            if (err) return console.log(err);
            // console.log("Doc cached.");
          })
        } catch (e) {
          console.error(e)
        }

        // NOTE: now create the top-level inverted index
        pageContents
          .split(" ").forEach(incomingWord => {
            const word = incomingWord.toLowerCase()
            // NOTE: remove empty lines and multilines, returns [ '\n', '\n', '\n', '\n' ]
            // do this here instead of above to avoid concatenating unrelated words
            const isEmptyLines = word.match(/\n/g);

            // NOTE: only index words that are 3 characters or more
            if (word && word.length >= 3 && !isEmptyLines) {

              // NOTE: now split the word into all of its fragments to enable partial word matches
              // i.e. [ 'face', 'facele', 'faceles', 'faceless', 'facelessu', 'facelessui' ]
              const wordFragments = word.split('').reduce((acc, letter, i) => {
                if (i >= 2) {
                  const wordFragment = word.slice(0, i + 1);
                  acc.push(wordFragment);
                }
                return acc;
              }, []);

              if (wordFragments && Array.isArray(wordFragments) && wordFragments.length > 0) {
                wordFragments.forEach(wordFragment => {
                  if (!invertedIndex[wordFragment]) {
                    // word is not yet indexed
                    invertedIndex[wordFragment] = [pagePath]
                  } else if (!invertedIndex[wordFragment].includes(pagePath)) {
                    // NOTE: page is not yet indexed on this word
                    invertedIndex[wordFragment].push(pagePath);
                  }
                })
              }
            }
          })
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
