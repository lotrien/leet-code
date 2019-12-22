/**
 * 136. Single Number
 */
const getLonelyInteger = function(array) {
  return array.reduce((acc, current) => acc ^ current);
}
