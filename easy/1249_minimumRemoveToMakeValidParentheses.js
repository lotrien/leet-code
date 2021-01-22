/**
 * 1249. Minimum Remove to Make Valid Parentheses
 */
const minRemoveToMakeValid = function(s) {
  if (!s.length) {
    return '';
  }

  const idxs = [];
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
      idxs.push(i);
    } else if (s[i] === ')') {
      if (!stack.length) {
        idxs.push(i);
      } else {
        stack.pop();
        idxs.length = idxs.length - 1;
      }
    }
  }

  let sb = '';
  let hashSet = new Set(idxs); // to have faster search operation

  for (let i = 0; i < s.length; i++) {
    if (!hashSet.has(i)) {
      sb += s[i];
    }
  }

  return sb;
}
