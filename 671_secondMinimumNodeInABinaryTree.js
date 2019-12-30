/**
 * 671. Second Minimum Node In a Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function _traverse(node, set) {
  if (node) {
    set.add(node.val);
    _traverse(node.left, set);
    _traverse(node.right, set);
  }
}

const findSecondMinimumValue = function(root) {
  if (!root) {
    return;
  }

  const unique = new Set();

  _traverse(root, unique);

  let secondMin = Number.MAX_VALUE;

  for (let key of unique) {
    if (root.val < key && key < secondMin) {
      secondMin = key;
    }
  }

  return secondMin < Number.MAX_VALUE ? secondMin : -1;
}
