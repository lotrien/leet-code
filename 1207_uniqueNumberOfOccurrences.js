/**
 * 1207. Unique Number of Occurrences
 * 
 * Given an array of integers arr, write a function that returns true if and only
 * if the number of occurrences of each value in the array is unique.
 * 
 * Example:
 * Input: arr = [1,2,2,1,1,3]
 * Output: true
 * Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values
 * have the same number of occurrences.
 */
const uniqueOccurrences = function(nums) {
  const map = new Map();

  for (let val of nums) {
    map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1);
  }

  const set = new Set(map.values());

  return set.size === map.size
}
