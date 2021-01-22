/**
 * 509. Fibonacci Number
 */
const fib = function(n) {
  if (n <= 1) {
    return n;
  }
  return memo(n);
};

const memo = function(n) {
  const memoized = [];
  memoized[0] = 0;
  memoized[1] = 1;

  for (let i = 2; i <= n; i++) {
    memoized[i] = memoized[i-1] + memoized[i-2];
  }

  return memoized[n];
}
