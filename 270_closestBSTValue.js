/**
 * 270. Closest Binary Search Tree Value
 * 
 * Given a non-empty binary search tree and a target value, find the value in
 * the BST that is closest to the target.
 * Note: Given target value is a floating point. You are guaranteed to have
 * only one unique value in the BST that is closest to the target.
 * 
 * Example:
 * Input: root = [4,2,5,1,3], target = 3.714286
 * Output: 4
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const closestValue = function(root, target) {
  let closest = root.val;

  while (root) {
    if (Math.abs(root.val - target) < Math.abs(closest - target)) {
      closest = root.val;
    }

    root = target < root.val ? root.left : root.right;
  }

  return closest;
}
