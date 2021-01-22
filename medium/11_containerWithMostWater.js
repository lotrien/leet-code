/**
 * 11. Container With Most Water
 */
const maxArea = function(height) {
  let max = 0;
  let start = 0;
  let end = height.length - 1;

  while (start < end) {
    const len = end - start;
    max = Math.max(max, Math.min(height[start], height[end]) * len);
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return max;
}
