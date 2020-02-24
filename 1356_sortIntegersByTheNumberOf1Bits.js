/**
 * 1356. Sort Integers by The Number of 1 Bits
 */
function getNumberOfOnes(number) {
  let counter = 0;
  while (number) {
    if (number & 1) counter++;
    number = number >> 1;
  }
  return counter;
}

const sortByBits = function(arr) {
  return arr.sort((a, b) => {
    if (getNumberOfOnes(a) === getNumberOfOnes(b)) {
      return a - b;
    }
    return getNumberOfOnes(a) - getNumberOfOnes(b);
  })
}
