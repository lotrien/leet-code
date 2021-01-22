/**
 * 49. Group Anagrams
 */
const groupAnagrams = function(strs) {
  if (!strs || !strs.length) {
    return [];
  }

  const res = {};

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join('');
    if (!res[key]) {
      res[key] = [strs[i]];
    } else {
      res[key].push(strs[i]);
    }
  }

  return Object.values(res);
}
