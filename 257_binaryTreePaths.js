/**
 * 257. Binary Tree Paths
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const binaryTreePaths = function(root) {
  const paths = [];
  if (!root) {
    return paths;
  }

  function _paths(node, path) {
    if (!node) {
      return;
    }

    path += String(node.val);

    if (!node.left && !node.right) {
      paths.push(path);
    } else {
      path += '->';
      _paths(node.left, path);
      _paths(node.right, path);
    }
  }

  _paths(root, '');

  return paths;
}
