function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const rangeSumBST = function(root, l, r) {
  if (!root) {
    return 0;
  }

  let value = root.val >= l && root.val <= r ? root.val : 0;

  return value + rangeSumBST(root.left, l, r) + rangeSumBST(root.right, l, r);
}
