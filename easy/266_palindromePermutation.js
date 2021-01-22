/**
 * 266. Palindrome Permutation
 */
const canPermutePalindrome = function(s) {
  const map = {};

  for (let letter of s) {
    if (map[letter]) {
      map[letter] = map[letter] + 1;
    } else {
      map[letter] = 1;
    }
  }

  let countOdd = 0;

  Object.keys(map).forEach(key => {
    if (map[key] % 2 !== 0) {
      countOdd++;
    }
  });

  return s.length % 2 === 0 ? countOdd === 0 : countOdd === 1;
}
