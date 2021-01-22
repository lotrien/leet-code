/**
 * 98. Validate Binary Search Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const _traverse = function(tree, set) {
  if (!tree) { return };

  _traverse(tree.left, set);
  set.push(tree.val);
  _traverse(tree.right, set);
}

const isValidBST = function(root) {
  if (!root) {
    return true;
  }

  const tree = [];

  _traverse(root, tree);

  for (let i = 1; i < tree.length; i++) {
    if (tree[i] <= tree[i-1]) {
      return false;
    }
  }

  return true;
}
