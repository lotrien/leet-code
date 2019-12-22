/**
 * 344. Reverse String
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
