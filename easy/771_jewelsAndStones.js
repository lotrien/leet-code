/**
 * 771. Jewels and Stones
 */
const numJewelsInStones = function(j, s) {
  let jewels = new Set(j);
  let numOfJewels = 0;

  for (let i = 0; i < s.length; i++) {
    if (jewels.has(s.charAt(i))) {
      numOfJewels++;
    }
  }

  return numOfJewels;
}
