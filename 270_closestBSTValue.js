/**
 * 270. Closest Binary Search Tree Value
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
