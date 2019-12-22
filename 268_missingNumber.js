/**
 * 268. Missing Number
 */

// O(2n) run complexity
const missingNumberHashSet = function(nums) {
  const hashSet = {};

  nums.forEach(value => {
    hashSet[value] = value;
  });

  for (let i = 0; i < nums.length + 1; i++) {
    if (hashSet[i] === undefined) {
      return i;
    }
  }
}

const missingNumberBitManipulation = function(nums) {
  let x1 = 0;
  let x2 = 0;

  for (let i = 0; i < nums.length; i++) {
    x1 ^= nums[i];
  }

  for (let j = 1; j <= nums.length; j++) {
    x2 ^= j;
  }

  return x1 ^ x2;
}
