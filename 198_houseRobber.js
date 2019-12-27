/**
 * 198. House Robber
 */
const rob = function(nums) {
  let dp = [(nums[0] || 0), (nums[1] || 0)];

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], (dp[i - 3] || 0) + nums[i]);
  }

  return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
}
