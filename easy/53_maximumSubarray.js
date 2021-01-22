/**
 * 53. Maximum Subarray
 */
const maxSubArray = function(nums) {
  const n = nums.length;
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < n; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}
