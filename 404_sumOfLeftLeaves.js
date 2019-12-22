/**
 * 404. Sum of Left Leaves
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sumOfLeftLeaves = function(root, isLeft) {
  if (!root) {
    return 0;
  }

  const isLeftLeaf = !root.left && !root.right && isLeft;

  if (isLeftLeaf) {
    return root.val;
  }

  return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false);
}
