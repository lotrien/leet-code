/**
 * 108. Convert Sorted Array to Binary Search Tree
 * 
 * Given an array where elements are sorted in ascending order, convert it to a
 * height balanced BST. For this problem, a height-balanced binary tree is
 * defined as a binary tree in which the depth of the two subtrees of every
 * node never differ by more than 1.
 * 
 * Example:
 * Given the sorted array: [-10,-3,0,5,9],
 * One possible answer is: [0,-3,9,-10,null,5],
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
