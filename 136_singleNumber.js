/**
 * 136. Single Number
 * 
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 * Note: Your algorithm should have a linear runtime complexity.
 */
const getLonelyInteger = function(array) {
  return array.reduce((acc, current) => acc ^ current);
}
