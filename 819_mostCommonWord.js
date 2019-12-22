/**
 * 819. Most Common Word
 */
const mostCommonWord = function(paragraph, banned) {
  const bannedSet = new Set(banned);
  const wordsMap = new Map();

  paragraph = paragraph.toLowerCase().split(/\W+/);

  for (let item of paragraph) {
    if (item && !bannedSet.has(item)) {
      if (wordsMap.has(item)) {
        wordsMap.set(item, wordsMap.get(item) + 1)
      } else {
        wordsMap.set(item, 1);
      }
    }
  }

  let max = 0;
  let result = '';
  for (let [word, count] of wordsMap.entries()) {
    if (count > max) {
      max = count;
      result = word
    }
  }

  return result;
}
