/**
 * 572. Subtree of Another Tree
 * 
 * Given two non-empty binary trees s and t, check whether tree t has exactly
 * the same structure and node values with a subtree of s. A subtree of s is
 * a tree consists of a node in s and all of this node's descendants.
 * The tree s could also be considered as a subtree of itself.
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
