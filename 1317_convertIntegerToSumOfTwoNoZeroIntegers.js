/**
 * 1317. Convert Integer to the Sum of Two No-Zero Integers
 */
const _random = function(len) {
  return Math.floor(Math.random() * (len - 1) + 1);
}

var getNoZeroIntegers = function(n) {
  let first = _random(n);
  let second = n - first;

  while (String(first).includes('0') || String(second).includes('0')) {
    first = _random(n);
    second = n - first;
  }

  return [first, second];
}
