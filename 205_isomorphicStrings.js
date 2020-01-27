/**
 * 205. Isomorphic Strings
 */
var isIsomorphic = function(s, t) {
  const map = new Map();
  const set = new Set();

  for (let  i = 0; i < s.length; i++) {
    const char = map.get(s[i]);
    if (!char) {
      if (set.has(t[i])) {
        return false;
      }
      set.add(t[i]);
      map.set(s[i], t[i]);
    } else if (char !== t[i]) {
      return false;
    }
  }
  
  return true;
}
