/**
 * 104. Maximum Depth of Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
