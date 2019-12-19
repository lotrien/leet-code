/**
 * 111. Minimum Depth of Binary Tree
 * 
 * Given a binary tree, find its minimum depth. The minimum depth is the number
 * of nodes along the shortest path from the root node down to the nearest
 * leaf node.
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * Given binary tree [3,9,20,null,null,15,7], return its minimum depth = 2.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const minDepth = function(root) {
  if (!root) {
    return 0;
  }

  const left = minDepth(root.left);
  const right = minDepth(root.right);

  if (!left || !right) {
    return 1 + left + right;
  }

  return 1 + Math.min(left, right);
}
