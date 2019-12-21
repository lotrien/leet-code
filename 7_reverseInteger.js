/**
 * 7. Reverse Integer
 * 
 * Given a 32-bit signed integer, reverse digits of an integer.
 * Note: Assume we are dealing with an environment which could only store
 * integers within the 32-bit signed integer range: [−2^31,  2^31 − 1].
 * For the purpose of this problem, assume that your function returns 0
 * when the reversed integer overflows.
 * 
 * Example: 
 * Input: 123
 * Output: 321
 */
const reverse = function(x) {
  let reversed  = 0;
  const MAX = 2 ** 31 - 1;
  const MIN = -1 * 2 ** 31;

  let isNegative = false;

  if (x < 0) {
    isNegative = true;
    x = Math.abs(x);
  }
  
  while (x !== 0) {
    let pop = x % 10;
    x = Math.floor(x / 10);
      
    reversed = (reversed * 10) + pop;
  }

  if (isNegative) {
    reversed *= -1;
  }

  if (reversed > MAX || reversed < MIN) {
    return 0;
  }

  return reversed;
}
