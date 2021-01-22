/**
 * 1161. Maximum Level Sum of a Binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const maxLevelSum = function(root) {
  if (!root) {
    return;
  }

  const map = {};

  function _traverse(node, level) {
    if (!node) {
      return;
    }

    _traverse(node.left, level + 1);
    map[level] = (map[level] || 0) + node.val;
    _traverse(node.right, level + 1);
  }

  _traverse(root, 1);

  const max = { level: null, value: 0 };

  for (let key in map) {
    if (max.value < map[key]) {
      max.level = key;
      max.value = map[key];
    }
  }

  return max.level;
};
