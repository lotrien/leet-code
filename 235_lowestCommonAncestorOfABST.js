/**
 * 235. Lowest Common Ancestor of a Binary Search Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const lowestCommonAncestor = function(root, p, q) {
  const parent = root.val;
  const pVal = p.val;
  const qVal = q.val;

  if (pVal > parent && qVal > parent) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < parent && qVal < parent) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
}
