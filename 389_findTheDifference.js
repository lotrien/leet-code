/**
 * 389. Find the Difference
 */
const findTheDifference = function(s, t) {
  let sum1 = 0;
  for (let char of s) {
    sum1 += char.charCodeAt();
  }

  let sum2 = 0;
  for (let char2 of t) {
    sum2 += char2.charCodeAt();
  }

  return String.fromCharCode(sum2 - sum1);
}
