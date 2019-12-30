/**
 * 129. Sum Root to Leaf Numbers
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sumNumbers = function(root) {
  if (!root) {
    return 0;
  }

  const allPaths = [];

  function _pathFinder(node, path = '') {
    if (!node) {
      return 0;
    }

    path += node.val;

    if (!node.left && !node.right) {
      allPaths.push(path);
    } else {
      _pathFinder(node.left, path);
      _pathFinder(node.right, path);
    }
  }

  _pathFinder(root);

  return allPaths.reduce((acc, val) => acc + Number(val), 0)
}
