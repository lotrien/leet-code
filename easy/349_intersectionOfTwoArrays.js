/**
 * 349. Intersection of Two Arrays
 */
const intersection = function(nums1, nums2) {
  const result = new Set();

  for (let num of nums1) {
    if (nums2.includes(num)) {
      result.add(num);
    }
  }

  return [...result.keys()];
}
