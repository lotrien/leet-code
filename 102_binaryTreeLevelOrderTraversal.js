/**
 * 102. Binary Tree Level Order Traversal
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  const res = [];
  let counter = 0;
  const queue = [{ counter, node: root }];

  while (queue.length) {
    const { node, counter } = queue.shift();
    res[counter] = res[counter] || [];
    res[counter].push(node.val);

    if (node.left) {
      queue.push({ counter: counter + 1, node: node.left });
    }
    if (node.right) {
      queue.push({ counter: counter + 1, node: node.right });
    }
  }

  return res;
}
