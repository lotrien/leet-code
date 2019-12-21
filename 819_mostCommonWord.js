/**
 * 819. Most Common Word
 * 
 * Given a paragraph and a list of banned words, return the most frequent word
 * that is not in the list of banned words.  It is guaranteed there is at least
 * one word that isn't banned, and that the answer is unique.
 * Words in the list of banned words are given in lowercase, and free of
 * punctuation.  Words in the paragraph are not case sensitive. The answer
 * is in lowercase.
 * 
 * Example:
 * Input: 
 * paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
 * banned = ["hit"]
 * Output: "ball"
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
