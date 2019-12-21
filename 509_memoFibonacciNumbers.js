/**
 * 509. Fibonacci Number
 *
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the
 * Fibonacci sequence, such that each number is the sum of the two preceding
 * ones, starting from 0 and 1.
 *
 * Example 1:
 * Input: 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1
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
