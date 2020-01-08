/**
 * 1310. XOR Queries of a Subarray
 */
// brute force time consuming solution
const xorQueries = function(arr, queries) {
  const res = [];

  for (let q of queries) {
    const xor = (q[0] === q[1])
    ? arr[q[0]]
    : arr.reduce((acc, val, idx) => {
        if (idx >= q[0] && idx <= q[1]) {
          return acc ^ val;
        }

        return acc;
      }, 0);

    res.push(xor);
  }

  return res;
};

// optimal
const xorQueries = function(arr, queries) {
  const res = [];

  for (let q of queries) {
    let xor = 0;

    for (let j = q[0]; j <= q[1]; j++) {
      xor ^= arr[j];
    }

    res.push(xor);
  }

  return res;
}
