/**
 * 1007. Minimum Domino Rotations For Equal Row
 */
const minDominoRotations = function(a, b) {
  function _check(x) {
    let rotationsA = 0;
    let rotationsB = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== x && b[i] !== x) {
        return -1;
      } else if (a[i] !== x) {
        rotationsA += 1;
      } else if (b[i] !== x) {
        rotationsB += 1;
      }
    }

    return Math.min(rotationsA, rotationsB);
  }

  const rotations = _check(a[0]);

  return (rotations !== -1 || a[0] === b[0])
    ? rotations
    : _check(b[0]);
}
