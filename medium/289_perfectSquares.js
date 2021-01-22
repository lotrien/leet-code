/**
 * 279. Perfect Squares
 */
var numSquares = function(n) {
  const set = new Set();

  function _isDivided(n, count) {
    if (count === 1) {
      return set.has(n);
    }

    for (let i of set.keys()) {
      if (_isDivided(n - i, count - 1)) {
        return true;
      }
    }

    return false;
  }

  for (let i = 1; i * i <= n; i++) {
    const pow = Math.pow(i, 2);
    set.add(pow);
  }

  let count = 1;

  for (; count <= n; count++) {
    if (_isDivided(n, count)) {
      return count;
    }
  }

  return count;
}

