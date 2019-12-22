
/**
 * 287. First Unique Character in a String
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
