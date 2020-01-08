/**
 * 145. Binary Tree Postorder Traversal
 */
// tricky solution
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var postorderTraversal = function(root) {
  if (!root) {
    return [];
  }

  const res = [];
  const stack = [root];
  
  while (stack.length) {
    const r = stack.pop();

    res.push(r.val);
    if (r.left) {
      stack.push(r.left);
    }
    if (r.right) {
      stack.push(r.right);
    }
  }

  return res.reverse();
}

// better solution (keeping in mind that current queue length is actual length of level nodes)
var levelOrder = function(root) {
  if (!root) {
    return [];
  }

  const res = [];
  const queue = [root];

  while (queue.length) {
    const len = queue.length;

    const level = [];
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    res.push(level);
  }

  return res;
}
