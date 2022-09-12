const cache = require('./_cache');

async function searchCache(searchString) {
  const results = [];
  const searchWords = searchString.toLowerCase().split(" ");

  searchWords.forEach(word => {
    if (word.length > 2) {
      const cachedWord = cache[word];
      cachedWord.forEach(result => {
        if (!results.includes(result)) {
          results.push(result);
        }
      })
    }
  })

  return results;
}

module.exports = searchCache;
