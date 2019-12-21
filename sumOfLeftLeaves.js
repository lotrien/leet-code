/**
 * 404. Sum of Left Leaves
 * 
 * Find the sum of all left leaves in a given binary tree.
 * 
 * Example:
 * Input: [3, 9, 20, null, null, 15, 7]
 * Output: There are two left leaves in the binary tree, with values 9 and 15
 * respectively. Return 24.
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
