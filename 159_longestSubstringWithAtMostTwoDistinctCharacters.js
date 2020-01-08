/**
 * 159. Longest Substring with At Most Two Distinct Characters
 */
const lengthOfLongestSubstringTwoDistinct = function(string) {
  if (!string || !string.length) {
    return 0;
  }

  let lastChar = '';
  let secondLastChar = '';
  let lastCharCount = 0;
  let currentLongest = 0;
  let longest = 0;

  for (let char of string) {
    if (char === lastChar || char === secondLastChar) {
      currentLongest++;
    } else {
      currentLongest = lastCharCount + 1;
    }

    if (char === lastChar) {
      lastCharCount++;
    } else {
      lastCharCount = 1;
    }

    if (char !== lastChar) {
      secondLastChar = lastChar;
      lastChar = char;
    }

    longest = Math.max(longest, currentLongest);
  }

  return longest;
}
