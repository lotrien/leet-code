/**
 * 238. Product of Array Except Self
 */
// not optimal (O(n^2))
const productExceptSelf = function(nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product *= nums[j];
      }
    }
    res.push(product);
  }

  return res;
}

const productExceptSelf = function(nums) {
  const fullProduct = nums.reduce((acc, val) => acc * val, 1);

  return nums.map(value => fullProduct / value);
}

// optimal
const productExceptSelf = function(nums) {
  const res = [];
  let left = 1;
  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] = right;
    right *= nums[i];
  }

  for (let j = 0; j < nums.length; j++) {
    res[j] *= left;
    left *= nums[j];
  }

  return res;
}
