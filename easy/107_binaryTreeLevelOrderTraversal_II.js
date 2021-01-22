/**
 * 107. Binary Tree Level Order Traversal II
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }

  const res = [];
  const queue = [{ node: root, level: 0 }];

  while (queue.length) {
    const { node, level } = queue.shift();

    if (node) {
      if (res[level]) {
        res[level].push(node.val);
      } else {
        res[level] = [node.val]
      }

      if (node.left) {
        queue.push({ node: node.left, level: level + 1});
      }
      if (node.right) {
        queue.push({ node: node.right, level: level + 1});
      }
    }
  }

  return res.reverse();
}
