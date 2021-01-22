/**
 * 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
 */
const numOfSubarrays = function(arr, k, threshold) {
  let count = 0;
  let sum = 0;
    for (let q = 0; q < k; q++) {
    sum += arr[q];
  }

  for (let i = 0; i < arr.length; i++) {
    sum = (i === 0) ? sum : sum + arr[i+k - 1] - arr[i-1];

    if (sum / k >= threshold) {
      count++;
    }
  }

  return count;
}
