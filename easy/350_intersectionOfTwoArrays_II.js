/**
 * 350. Intersection of Two Arrays II
 */
const intersect = function(nums1, nums2) {
  const map = new Map();

  for (let i = 0; i < nums1.length; i++) {
    const elem = nums1[i];

    if (map.has(elem)) {
      map.set(elem, map.get(elem) + 1);
    } else {
      map.set(elem, 1);
    }
  }

  const res = [];

  for (let num of nums2) {
    if (map.get(num) > 0) {
      map.set(num, map.get(num) - 1)
      res.push(num);
    }
  }

  return res;
}
