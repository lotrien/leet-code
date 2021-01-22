/**
 * 746. Min Cost Climbing Stairs
 */
const minCostClimbingStairs = function(cost) {
  let f1 = 0;
  let f2 = 0;

  for (let i = 0; i < cost.length; i++) {
    let temp = cost[i] + Math.min(f1, f2);
    f2 = f1;
    f1 = temp;
  }

  return Math.min(f1, f2);
}
