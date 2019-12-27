/**
 * 226. Invert Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const invertTree = function(root) {
  if (!root) {
    return null;
  }

  function _invert(node) {
    if (!node) {
      return null;
    }
    _invert(node.left);
    _invert(node.right);

    if (node.left || node.right) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
    }
  }

  _invert(root);

  return root;
}

const invertTree = function(root) {
  if (!root) {
    return null;
  }

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.right = left;
  root.left = right;

  return root;
}
