/**
 * 344. Reverse String
 * 
 * Write a function that reverses a string. The input string is given as an array
 * of characters char[]. Do not allocate extra space for another array, you must
 * do this by modifying the input array in-place with O(1) extra memory. You may
 * assume all the characters consist of printable ascii characters.
 * 
 * Example:
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 */
// not efficient
const reverseString1 = function(array) {
  const len = array.length - 1;

  for (let i = 0; i < len; i++) {
    array.splice(len - i, 0, array.shift());
  }

  return array;
};

// more efficient 
const reverseString = function(array) {
  const len = Math.floor(array.length / 2);

  for (let i = 0; i < len; i++) {
    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
  }

  return array;
};
