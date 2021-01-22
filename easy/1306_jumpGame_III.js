/**
 * 1306. Jump Game III
 */
const canReach = function(arr, start, visited = new Set()) {
  if (start > arr.length - 1) {
    return false;
  }

  if (visited.has(start)) {
    return false;
  }

  if (arr[start] !== 0) {
    visited.add(start);
    return canReach(arr, start + arr[start], visited) || canReach(arr, start - arr[start], visited);
  }

  return true;
}
