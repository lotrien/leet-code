/**
 * 246. Strobogrammatic Number
 */
const isStrobogrammatic = function(num) {
  const map = new Map([
    ['6', '9'],
    ['9', '6'],
    ['0', '0'],
    ['1', '1'],
    ['8', '8']
  ]);

  let start = 0;
  let end = num.length - 1;

  while (start <= end) {
    if (!map.has(num[start]) || !map.has(num[end])) {
      return false;
    }

    if (map.get(num[start]) !== num[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}
