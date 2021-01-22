/**
 * 572. Subtree of Another Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const isSubtree = function(s, t) {
  const tree1 = traversal(s);
  const tree2 = traversal(t);

  return tree1.indexOf(tree2) > -1;
};

const traversal = function(t) {
  if (!t) {
    return null;
  }

  return `#${t.val} ${traversal(t.left)} ${traversal(t.right)}`
}
