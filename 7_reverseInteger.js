/**
 * 7. Reverse Integer
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
