/**
 * 3. Longest Substring Without Repeating Characters
 */
const lengthOfLongestSubstring = function(s) {
  if (!s) {
    return 0;
  }

  let longest = 0;
  let startIdx = 0;
  let endIdx = 0;

  let substring = new Set();

  while (startIdx < s.length && endIdx < s.length) {
    if (!substring.has(s[endIdx])) {
      substring.add(s[endIdx]);
      endIdx++;
      longest = Math.max(longest, endIdx - startIdx);
    } else {
      substring.delete(s[startIdx]);
      startIdx++;
    }
  }

  return longest;
}
