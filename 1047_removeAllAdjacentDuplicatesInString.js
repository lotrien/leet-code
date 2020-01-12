/**
 * 1047. Remove All Adjacent Duplicates In String
 */
const removeDuplicates = function(s) {
  const stack = [];

  for (let char of s) {
    if (stack[stack.length - 1] !== char) {
      stack.push(char);
    } else {
      stack.pop();
    }
  }

  return stack.join('');
};
