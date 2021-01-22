/**
 * 111. Minimum Depth of Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const minDepth = function(root) {
  if (!root) {
    return 0;
  }

  const left = minDepth(root.left);
  const right = minDepth(root.right);

  if (!left || !right) {
    return 1 + left + right;
  }

  return 1 + Math.min(left, right);
}
