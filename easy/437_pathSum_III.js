/**
 * 437. Path Sum III
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const pathSum = function(root, sum) {
  const currentCount = _sum(root, sum);

  if (!root) {
    return 0;
  }

  return currentCount + pathSum(root.left, sum) + pathSum(root.right, sum);
};

const _sum = function(node, sum) {
  if (!node) {
    return 0;
  }

  let count = 0;
  if (node.val === sum) {
    count++;
  }

  return count + _sum(node.left, sum - node.val) + _sum(node.right, sum - node.val);
}
