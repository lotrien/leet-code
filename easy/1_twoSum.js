/**
 * 1. Two Sum
 */
const twoSum = function(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {

    if (numMap.has(target - nums[i])) {
      return [numMap.get(target - nums[i]), i];
    }

    numMap.set(nums[i], i);
  }
}
