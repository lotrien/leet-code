/**
 * 101. Symmetric Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const isSymmetric = function(root) {
  function _mirror(r1, r2) {
    if (!r1 && !r2) {
      return true;
    }
    if (!r1 || !r2) {
      return false;
    }

    return r1.val === r2.val && _mirror(r1.right, r2.left) && _mirror(r1.left, r2.right);
  }

  return _mirror(root, root);
}
