
/**
 * 287. First Unique Character in a String
 *
 * Given a string, find the first non-repeating character in it and return
 * it's index. If it doesn't exist, return -1.
 *
 * Examples:
 * s = "leetcode" return 0.
 * s = "loveleetcode", return 2.
 * Note: You may assume the string contain only lowercase letters.
 */
const firstUniqChar = function(s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let [value, count] of map) {
    if (count === 1) {
      return s.indexOf(value);
    }
  }

  return -1;
}
