/**
 * 242. Valid Anagram
 */
const isAnagram = function(s, t) {
  function _anagram(str) {
    const q = str.split('');
    return q.sort().join('');
  }

  return _anagram(s) === _anagram(t);
}
