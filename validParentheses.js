/**
 * 20. Valid Parentheses
 * 
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * Note that an empty string is also considered valid.
 * 
 * Example:
 * Input: "([)]"
 * Output: false
 */
const matches = {
  "{": "}",
  "[": "]",
  "(": ")"
};

function getLast(stack) {
  return stack[stack.length - 1];
}

function isMatch(el1, el2) {
  return matches[el2] === el1;
}

function isValid(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (isMatch(str[i], getLast(stack))) {
      stack.pop();
    } else {
      if (matches[str[i]]) {
        stack.push(str[i]);
      } else {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }

  return true;
}
