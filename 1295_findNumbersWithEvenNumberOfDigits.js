/**
 * 1295. Find Numbers with Even Number of Digits
 */
const findNumbers = function(nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) {
      res++;
    }
  }

  return res;
}

const findNumbers = function(nums) {
  let ret = 0;

  for (let num of nums) {
    let len = 0;
    for (let val = num; val > 0; len++) {
      val = Math.floor(val / 10);
    }

    if (len % 2 === 0) {
      ret++
    }
  }
  
  return ret;
}
