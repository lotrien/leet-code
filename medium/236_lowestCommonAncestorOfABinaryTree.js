/**
 * 236. Lowest Common Ancestor of a Binary Tree
 */
const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (!left) {
    return right;
  }
  if (!right) {
    return left;
  }

  return root;
}
