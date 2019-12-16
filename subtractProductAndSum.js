/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * 
 * Given an integer number n, return the difference between the product of
 * its digits and the sum of its digits.
 * 
 * Example:
 * Input: n = 234
 * Output: 15
 * Explanation:
 * Product of digits = 2 * 3 * 4 = 24
 * Sum of digits = 2 + 3 + 4 = 9
 * Result = 24 - 9 = 15
 */
const subtractProductAndSum1 = function(n) {
  const args = String(n).split("");

  const mul = args.reduce((acc, value) => acc * Number(value), 1);
  const sum = args.reduce((acc, value) => acc + Number(value), 0);
  return mul - sum;
}

const subtractProductAndSum2 = function(n) {
  const args = String(n).split("");

  let mul = 1;
  let sum = 0;

  args.forEach(value => {
    mul *= Number(value);
    sum += Number(value);
  })

  return mul - sum;
};

// most efficient
const subtractProductAndSum = function(n) {
  const digits = [];

  while (n > 0) {
    digits.push(n % 10);
    n = Math.floor(n / 10);
  }

  let mul = 1;
  let sum = 0;

  digits.forEach(value => {
    mul *= value;
    sum += value;
  })

  return mul - sum;
}
