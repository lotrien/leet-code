/**
 * 345. Reverse Vowels of a String
 */
const reverseVowels = function(s) {
  const vowels = 'AaEeIiOoUu';

  let start = 0;
  let end = s.length - 1;

  const res = s.split('');

  while (start < end) {
    if (vowels.includes(s[start]) && vowels.includes(s[end])) {
      [res[start], res[end]] = [res[end], res[start]];
      start++;
      end--;
    } else if (!vowels.includes(s[end])) {
      end -= 1;
    } else {
      start += 1;
    }
  }

  return res.join('');
}
