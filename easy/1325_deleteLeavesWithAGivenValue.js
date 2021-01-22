/**
 * 1325. Delete Leaves With a Given Value
 */
const removeLeafNodes = function(root, target) {
  if (!root) {
    return null;
  }
  
  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  return root.left === root.right && root.val === target ? null : root;
}
