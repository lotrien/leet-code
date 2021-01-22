/**
 * 112. Path Sum
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const hasPathSum = function(root, sum) {
  if (!root) {
    return false;
  }

  sum -= root.val;

  if (!root.left && !root.right) {
    return sum === 0;
  }

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}
