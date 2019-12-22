/**
 * 687. Longest Univalue Path
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const longestUnivaluePath = function(root) {
  let len = 0;

  function _len(node) {
    if (!node) {
      return 0;
    }

    const lenLeft = _len(node.left);
    const lenRight = _len(node.right);

    const arrowLeft = (node.left && node.left.val === node.val) ? lenLeft + 1 : 0;
    const arrowRight = (node.right && node.right.val === node.val) ? lenRight + 1 : 0;

    len = Math.max(len, arrowLeft + arrowRight);

    return Math.max(arrowLeft, arrowRight);
  }

  _len(root);

  return len;
}
