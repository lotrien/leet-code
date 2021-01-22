/**
 * 844. Backspace String Compare
 */
const backspaceCompare = function(S, T) {
  function _str(str) {
    const ans = [];

    for (let l of str) {
      if (l !== '#') {
        ans.push(l);
      } else {
        ans.pop();
      }
    }

    return ans.join('');
  }

  return _str(S) === _str(T);
}
