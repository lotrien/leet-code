/**
 * 94. Binary Tree Inorder Traversal
 */
var inorderTraversal = function(root) {
  const res = [];
  const stack = [];
  let current = root;

  while (current  || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();

    res.push(current.val);

    current = current.right;
  }

  return res;
}
