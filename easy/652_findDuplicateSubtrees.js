/**
 * 652. Find Duplicate Subtrees
 */
const findDuplicateSubtrees = function(root) {
  const count = new Map();
  const res = [];

  function collect(node) {
    if (!node) {
      return '#';
    }

    const serial = `${node.val},${collect(node.left)},${collect(node.right)}`;
    count.set(serial, (count.get(serial) || 0) + 1);

    if (count.get(serial) === 2) {
      res.push(node);
    }

    return serial;
  }

  collect(root);
  return res;
}
