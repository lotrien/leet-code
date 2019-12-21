/**
 * 112. Path Sum
 * 
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 * Note: A leaf is a node with no children.
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
