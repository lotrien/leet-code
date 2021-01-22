/**
 * 1207. Unique Number of Occurrences
 */
const uniqueOccurrences = function(nums) {
  const map = new Map();

  for (let val of nums) {
    map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1);
  }

  const set = new Set(map.values());

  return set.size === map.size
}
