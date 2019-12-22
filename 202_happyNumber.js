/**
 * 202. Happy Number
 */
const isHappy = function(num) {
  const calculated = new Set();
  const _isHappy = function(num) {
    const args = String(num).split("");

    const res = args.reduce((acc, value) => acc + Number(value) * Number(value), 0);

    if (res === 1) {
      return true;
    }

    if (calculated.has(res)) {
      return false;
    }

    calculated.add(res);
    return _isHappy(res);
  }
  
  return _isHappy(num);
}
