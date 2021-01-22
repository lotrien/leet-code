/**
 * 125. Valid Palindrome
 */
const isPalindrome = function(s) {
  s = s.toLowerCase();
  const regExp = /^[A-Za-z0-9]+$/;
  const n = s.split('').filter(char => regExp.test(char));

  if (!n.length) {
    return true;
  }

  const len = Math.floor(n.length / 2);

  for (let i = 0; i < len; i++) {
    if (n[i] !== n[n.length - i - 1]) {
      return false;
    }
  }

  return true;
}