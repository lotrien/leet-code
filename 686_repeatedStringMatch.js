/**
 * 686. Repeated String Match
 */
const repeatedStringMatch = function(s1, s2) {
  if (s1 === s2) {
    return 1;
  }

  let counter = 0;
  let s1Repeated = '';

  while (!s1Repeated.includes(s2)) {
    if (s1Repeated.length >= 10000) {
      return -1;
    }
    counter++;

    s1Repeated += s1;
  }

  return counter;
}
