/**
 * 1328. Break a Palindrome
 */
const breakPalindrome = function(p) {
  if (p.length <= 1) {
    return '';
  }

  let replaced = false;
  let newString = '';
  let counter = 97;

  const len = p.length;

  for (let i = 0; i < len; i++) {
    if (!replaced) {
      if (i === len - 1) {
        newString += String.fromCharCode(counter + 1);
        replaced = true;
      } else if (p[i] === String.fromCharCode(counter) || (len % 2 === 1 && Math.floor(len/2) === i)) {
        newString += p[i];
      } else {
        newString += String.fromCharCode(counter);
        replaced = true;
      }
    } else {
      newString += p[i];
    }
  }

  return newString;
}
