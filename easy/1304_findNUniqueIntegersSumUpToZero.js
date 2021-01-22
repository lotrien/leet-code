/**
 * 1304. Find N Unique Integers Sum up to Zero
 */
const sumZero = function(n) {
  const res = [];

  for (let i = 1 - n; i < n; i += 2) {
    res.push(i);
  }

  return res;
}
