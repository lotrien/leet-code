/**
 * 22. Generate Parentheses
 */
const _backtrack = function(list, currentStr,open, closed, max) {
  if (currentStr.length === max * 2) {
    list.push(currentStr);
    return;
  }

  if (open < max) {
    _backtrack(list, currentStr + '(', open+1, closed, max);
  }

  if (closed < open) {
    _backtrack(list, currentStr+ ')', open, closed+1, max);
  }
}

const generateParenthesis = function(n) {
  const output = [];

  _backtrack(output, '', 0, 0, n);

  return output;
}
