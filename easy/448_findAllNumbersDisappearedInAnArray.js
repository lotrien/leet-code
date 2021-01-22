/**
 * 448. Find All Numbers Disappeared in an Array
 */
// completely not optimal due to [].includes use
const findDisappearedNumbers = function(nums) {
  if (!nums) {
    return;
  }

  const res = [];

  for (let i = 1; i <= nums.length; i++) {
    if (!nums.includes(i)) {
      res.push(i);
    }
  }

  return res;
};

// better solution with O(n)
const findDisappearedNumbers = function(nums) {
  if (!nums) {
    return;
  }

  const res = [];
  const set = new Set();

  nums.forEach(value => { set.add(value) });

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      res.push(i);
    }
  }

  return res;
}
