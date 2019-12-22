/**
 * 20. Valid Parentheses
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
