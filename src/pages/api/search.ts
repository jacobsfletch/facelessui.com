const fs = require('fs');
const path = require('path')
const cache = require('../../../search/cache/index.json');

const removePunctuation = (side: 'leading' | 'trailing', text: string) => {
  const match = text.match(new RegExp(`[^a-zA-Z0-9]+${side === 'leading' ? '$' : '^'}`));
  // No match found
  if (!match || !match.index) {
    return text;
  }
  // Return sliced text
  return text.slice(0, match.index);
}

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
              const snippets = [...content.matchAll(new RegExp(word, 'gi'))].map(a => {
                const before = content.substring(a.index - snippetPadding, a.index);
                const after = content.substring(a.index + word.length, a.index + word.length + snippetPadding);

                // remove trailing  punctuation
                // const beforeClean = removePunctuation('leading', before);
                const afterClean = removePunctuation('trailing', after);

                // determine if we need to add an ellipsis and truncate the string
                const nearestPunctuation = before.match(/[^/n]|[^'. ']+$/); // newlines OR period+space
                let beforeClean = before;
                let prependEllipsis = true;

                // console.log(nearestPunctuation);
                if (nearestPunctuation && typeof nearestPunctuation.index === 'number') {
                  beforeClean = before.substring(nearestPunctuation.index + 1);
                  prependEllipsis = false;
                }

                // const beforeClean = before.replace(/^\s+/, '');

                return `${prependEllipsis ? '...' : ''}${beforeClean}<mark>${word}</mark>${afterClean}...`;
              });

              results.push({
                title,
                path: `/docs${pathToPage.split('/index')[0]}`,
                snippets
              })
            } catch (e) {
              console.log(e);
            }
          }
        })
      }
    }
  })

  return res.json(JSON.stringify(results));
}

export default search;
