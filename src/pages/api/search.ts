const fs = require('fs');
const path = require('path')
const cache = require('../../search/cache/index.json');

import { SearchResult } from '@root/providers/SearchProvider';

// To use this API, you can make a GET request to `/api/search` with the `?search=` query parameter
// You can adjust the snippet padding by adding a the `?padding=` query parameter

import type { NextApiRequest, NextApiResponse } from 'next'

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  const searchString = req.query.search as string;
  const snippetPadding = Number(req.query.padding as string || 20);

  const results: SearchResult[] = [];

  const searchWords = searchString.toLowerCase().split(" ");

  searchWords.forEach(word => {
    if (word.length > 2) {
      const match: string[] = cache[word];

      if (match && Array.isArray(match) && match.length > 0) {
        match.forEach(pathToPage => {
          if (!results.find((result) => result.path === pathToPage)) {
            // results.push(result);
            const pathWithoutDocs = pathToPage.replace('/docs', '');

            try {
              let pageData = fs.readFileSync(path.join('search/cache', `${pathWithoutDocs}.json`), 'utf8');
              const pageJSON = JSON.parse(pageData);
              const {
                title,
                content
              } = pageJSON;

              // get all the indexes of the word in the page
              // then return a snippet of the page with the word highlighted
              const wordsInContent = [...content.matchAll(new RegExp(word, 'gi'))];

              const snippets = wordsInContent.map(word => {
                const wordLength = word[0].length;
                let before = content.substring(word.index - snippetPadding, word.index);
                const lastCharBeforeSnippet = content[word.index - snippetPadding - 1];

                // determine if we need to add an ellipsis and truncate the string
                // if there is punctuation in the "before" string, then slice it off and don't ellipse
                const punctuationInBefore = [...before.matchAll(new RegExp('[^a-zA-Z0-9\\s]\\s', 'gm'))];
                let prependEllipsis = true;
                if (punctuationInBefore.length > 0) {
                  const indexOfLastPunctuation = punctuationInBefore[punctuationInBefore.length - 1].index;
                  before = before.substring(indexOfLastPunctuation + 2); // add two because we want to remove the period and space
                  prependEllipsis = false;
                }

                // if first character is a space, and the last character before the snippet is a period, then don't ellipse
                if (before[0] === ' ' && lastCharBeforeSnippet === '.') {
                  prependEllipsis = false;
                }

                if (before.length < snippetPadding) {
                  prependEllipsis = false;
                }

                before = before.replace('^\s+', ''); // remove leading whitespace

                ////// NOW DO THE SAME FOR AFTER

                let after = content.substring(word.index + wordLength, word.index + wordLength + snippetPadding);
                const firstCharAfterSnippet = content[word.index + wordLength + snippetPadding];

                // determine if we need to add an ellipsis and truncate the string
                // if there is punctuation in the "after" string, then slice it off and don't ellipse
                const punctuationInAfter = [...after.matchAll(new RegExp('[^a-zA-Z0-9\\s]\\s', 'gm'))];

                let appendEllipsis = true;
                if (punctuationInAfter.length > 0) {
                  const indexOfFirstPunctuation = punctuationInAfter[0].index;
                  after = after.substring(0, indexOfFirstPunctuation + 1); // NOTE: add one to include the punctuation
                  appendEllipsis = false;
                }

                // if last character is a space, and the first character after the snippet is a period, then don't ellipse
                if (after[after.length - 1] === ' ' && firstCharAfterSnippet === '.') {
                  appendEllipsis = false;
                }

                if (after.length < snippetPadding) {
                  appendEllipsis = false;
                }

                after = after.replace('^\s+$', ''); // remove trailing whitespace and punctuation

                return `${prependEllipsis ? '...' : ''}${before}<mark>${word}</mark>${after}${appendEllipsis ? '...' : ''}`;
              });

              const hash = pathToPage.split('#')[1];
              const sanitizedPath = pathToPage.split('/index')[0];

              results.push({
                title,
                path: `/docs${sanitizedPath}${hash ? `#${hash}` : ''}`,
                snippets
              })
            } catch (e) {
              console.error(e);
            }
          }
        })
      }
    }
  })

  return res.json(JSON.stringify(results));
}

export default search;
