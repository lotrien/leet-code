/**
 * 219. Contains Duplicate II
 */
const containsNearbyDuplicate = function(nums, k) {
  if (!nums || !nums.length) {
    return false;
  }

  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.get(nums[i]) >= 0) {
      return true;
    }

    set.add(nums[i]);

    if (set.size > k) {
      set.delete(nums[i - k]);
    }
  }
  return false;
}
