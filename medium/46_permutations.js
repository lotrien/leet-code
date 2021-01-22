/**
 * 46. Permutations
 */
const _backtrack = function(max, nums, list, index) {
  if (index === max) {
    list.push([...nums]);
    return;
  }

  for (let i = index; i < max; i++) {
    [nums[index], nums[i]] = [nums[i], nums[index]];

    _backtrack(max, nums, list, index + 1);

    [nums[index], nums[i]] = [nums[i], nums[index]];
  }
};

const permute = function(nums) {
  const output = [];

  _backtrack(nums.length, nums, output, 0);

  return output;
}
