/**
 * 1056. Confusing Number
 */
const confusingMap = {
  '0': 0,
  '1': 1,
  '6': 9,
  '8': 8,
  '9': 6
};

const invalidSet = new Set([2, 3, 4, 5, 7]);
const confusingNumber = function(n) {
  const nums = String(n).split('');
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    const num = Number(nums[i]);
    if (invalidSet.has(num)) {
      return false;
    }

    if (confusingMap[nums[i]] >= 0) {
      res.push(confusingMap[nums[i]]);
    } else {
      res.push(nums[i]);
    }
  }

  return Number(res.reverse().join('')) !== n;
}
