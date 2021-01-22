/**
 * 108. Convert Sorted Array to Binary Search Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const sortedArrayToBST = function(nums) {
  const helper = function(left, right) {
    if (left > right) {
      return null;
    }

    const pivot = Math.floor((left + right) / 2);

    let root = new TreeNode(nums[pivot]);

    root.left = helper(left, pivot - 1);
    root.right = helper(pivot + 1, right);

    return root;
  }

  return helper(0, nums.length - 1);
}
