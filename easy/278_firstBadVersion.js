/**
 * 278. First Bad Version
 */
const solution = function(isBadVersion) {
  return function(n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let pivot = Math.floor(left + ((right - left) / 2));

      if (isBadVersion(pivot)) {
        right = pivot;
      } else {
        left = pivot + 1;
      }
    }

    return right;
  }
}
