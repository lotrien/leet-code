/**
 * 26. Remove Duplicates from Sorted Array
 */
const removeDuplicates = function(nums) {
  let len = 1;
  if (!nums.length) {
    return 0;
  }

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[len] = nums[i];
      len += 1;
    }
  }

  return len;
}
