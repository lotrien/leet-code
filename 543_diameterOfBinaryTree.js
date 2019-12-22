/**
 * 543. Diameter of Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const diameterOfBinaryTree = function(root) {
  let d = 0;
  if (!root) {
    return 0
  }

  function depth(node) {
    if (!node) {
      return 0;
    }

    const left = depth(node.left);
    const right = depth(node.right);

    d = Math.max(d, left + right + 1);

    return Math.max(left, right) + 1;
  }

  depth(root);

  return d - 1;
}
