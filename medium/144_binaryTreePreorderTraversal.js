/**
 * 144. Binary Tree Preorder Traversal
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var preorderTraversal = function(root) {
  if (!root) {
    return [];
  }

  const res = [];
  const stack = [root];

  while (stack.length) {
    root = stack.pop();
    if (root) {
      res.push(root.val);
    }
    if (root.right) {
      stack.push(root.right);
    }
    if (root.left) {
      stack.push(root.left);
    }
  }

  return res;
}
