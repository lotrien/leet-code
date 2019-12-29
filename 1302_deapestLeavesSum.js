/**
 * 1302. Deepest Leaves Sum
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const _height = function(node) {
  if (!node) {
    return -1;
  }

  return 1 + Math.max(_height(node.left), _height(node.right)); 
}

const deepestLeavesSum = function(root) {
  if (!root) {
    return;
  }

  const height = _height(root);
  let sum = 0;

  function _leaf(node, level = 0) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right && level === height) {
      sum += node.val;
    } else {
      level += 1;
      _leaf(node.left, level);
      _leaf(node.right, level);
    }
  }

  _leaf(root);

  return sum;
}
