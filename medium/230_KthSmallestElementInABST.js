/**
 * 230. Kth Smallest Element in a BST
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function _traverse(node, set) {
  if (!node) {
    return;
  }

  _traverse(node.left, set);
  set.push(node.val);
  _traverse(node.right, set);
}

const kthSmallest = function(root, k) {
  if (!root) {
    return;
  }

  const set = [];
  _traverse(root, set);

  return set[k - 1];
}

