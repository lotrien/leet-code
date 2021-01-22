/**
 * 280. Wiggle Sort
 */
const wiggleSort = function(nums) {
  let less = true;

  for (let i = 0; i < nums.length - 1; i++) {
    if (less) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    } else {
      if (nums[i] < nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
      }
    }
    less = !less;
  }
}
