/**
 * 110. Balanced Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function _height(node) {
  if (!node) {
    return -1;
  }
  return 1 + Math.max(_height(node.left), _height(node.right));
}

const isBalanced = function(root) {
  if (!root) {
    return true;
  }

  const left = _height(root.left);
  const right = _height(root.right);

  return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}
