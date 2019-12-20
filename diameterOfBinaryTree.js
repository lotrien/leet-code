/**
 * 543. Diameter of Binary Tree
 *
 * Given a binary tree, you need to compute the length of the diameter of the
 * tree. The diameter of a binary tree is the length of the longest path between
 * any two nodes in a tree. This path may or may not pass through the root.
 * Note: The length of path between two nodes is represented by the number
 * of edges between them.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const diameterOfBinaryTree = function(root) {
  let d = 0;
  if (!root) {
    return 0
  }

  function depth(node) {
    if (!node) {
      return 0;
    }

    const left = depth(node.left);
    const right = depth(node.right);

    d = Math.max(d, left + right + 1);

    return Math.max(left, right) + 1;
  }

  depth(root);

  return d - 1;
}
