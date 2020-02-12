/**
 * 69. Sqrt(x)
 */
const mySqrt = function(x) {
  if (x < 2) {
    return x;
  }

  let left = 2;
  let right = Math.ceil(x / 2);

  while (left <= right) {
    let pivot = Math.floor(left + (right - left) / 2);
    const num = pivot * pivot;

    if (num === x) {
      return pivot;
    }

    if (num > x) {
      right = pivot - 1;
    } else {
      left = pivot + 1;
    }
  }

  return right;
}
