/**
 * 1305. All Elements in Two Binary Search Trees
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const traverse = function(node, result = []) {
  if (node) {
    traverse(node.left, result);
    result.push(node.val);
    traverse(node.right, result);
  }

  return result;
}

const getAllElements = function(root1, root2) {
  const r1 = traverse(root1);
  const r2 = traverse(root2);

  return r1.concat(r2).sort((a, b) => a - b);
}
