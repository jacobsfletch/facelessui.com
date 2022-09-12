const fs = require('fs')
const path = require('path')
const glob = require('glob')

function makeCache() {
  const makeIndex = async () => {
    const invertedIndex = {}

    const pages = await glob.sync('**/*.mdx', { cwd: 'src/pages/docs' });

    if (pages && Array.isArray(pages) && pages.length > 0) {
      pages.forEach((filePath) => {
        let pagePath = filePath
          .replace('.mdx', '')
          .replace('/index', '')
          .replace(/^/, '/docs/') // add leading slash and top-level dir

        let pageContents = fs.readFileSync(path.join('src/pages/docs', filePath), 'utf8');

        pageContents = pageContents.split("{/* DOC_START */}")[1] || pageContents; // NOTE: safely remove the js imports at the beginning of each doc

        pageContents
          .split("{/* DOC_END */}")[0] // NOTE: remove the raw jsx at the end of each file
          .replace(/```[\s\S]*?```/g, '') // NOTE: remove all code blocks
          .replace(/[{(`"'.,#;—:@)}]/g, '') // NOTE: remove unwanted special characters
          .toLowerCase()
          .split(" ").forEach(word => {
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

    try {
      fs.readdirSync('search')
    } catch (e) {
      fs.mkdirSync('search')
    }

    fs.writeFile('search/cache.json', indexAsJSON, function (err) {
      if (err) return console.log(err);
      console.log("Docs cached.");
    })
  }

  makeIndex();
}

makeCache();
