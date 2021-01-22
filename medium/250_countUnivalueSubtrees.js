/**
 * 250. Count Univalue Subtrees
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const countUnivalSubtrees = function(root) {
  if (!root) {
    return 0;
  }
  let count = 0;

  function _uni(node) {
    if (!node.left && !node.right) {
      count += 1;
      return true;
    }

    let uni = 1;
    if (node.left) {
      uni = _uni(node.left) && uni && node.left.val === node.val;
    }
    if (node.right) {
      uni = _uni(node.right) && uni && node.right.val === node.val;
    }

    count += uni;
    return uni;
  }
  _uni(root);

  return count;
};
