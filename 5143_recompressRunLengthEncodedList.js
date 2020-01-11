/**
 * 5143. Decompress Run-Length Encoded List
 */
const decompressRLElist = function(nums) {
  const res = [];
  let i = 0;

  while (i < nums.length) {
    if (i % 2 === 0) {
      for (let j = 0; j < nums[i]; j++) {
        res.push(nums[i+1]);
      }
      i += 2;
    } else {
      i++;
    }
  }

  return res;
}
