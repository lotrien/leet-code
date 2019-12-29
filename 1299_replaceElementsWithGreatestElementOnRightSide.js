/**
 * 1299. Replace Elements with Greatest Element on Right Side
 */
// Brute force
const replaceElements = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      arr[i] = -1;
    } else {
      arr[i] = _maxRight(arr, i + 1);
    }
  }

  return arr;
}

const _maxRight = function(arr, start) {
  let max = 0;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Optimal
const replaceElements = function(arr) {
  let max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    const tmp = arr[i];
    arr[i] = max;
    max = Math.max(max, tmp);
  }

  return arr;
}
