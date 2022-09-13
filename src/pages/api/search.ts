const fs = require('fs');
const path = require('path')
const cache = require('../../../search/cache/index.json');

// To use this API, you can make a GET request to `/api/search` with the `?search=` query parameter
// You can adjust the snippet padding by adding a the `?padding=` query parameter

import type { NextApiRequest, NextApiResponse } from 'next'

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  const searchString = req.query.search as string;
  const snippetPadding = Number(req.query.padding as string || 20);

  const results: {
    path: string
    snippets: string[]
  }[] = [];

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
              let pageContents = fs.readFileSync(path.join('search/cache', `${pathWithoutDocs}.json`), 'utf8');
              const page = JSON.parse(pageContents);

              // get all the indexes of the word in the page
              // then return a snippet of the page with the word highlighted
              const snippets = [...page.matchAll(new RegExp(word, 'gi'))].map(a => {
                const before = page.substring(a.index - snippetPadding, a.index);
                const after = page.substring(a.index + word.length, a.index + word.length + snippetPadding);
                return `...${before}<mark>${word}</mark>${after}...`;
              });

              results.push({
                path: pathToPage.split('/index')[0],
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
