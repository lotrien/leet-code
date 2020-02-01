/**
 * 939. Minimum Area Rectangle
 */
var minAreaRect = function(points) {
  const rows = new Map();
  for (let [x, y] of points) {
    if (!rows.has(x)) {
      rows.set(x, new Set())
    }
    rows.get(x).add(y);
  }

  let res = Number.MAX_VALUE;

  for (let [x1, y1] of points) {
    for (let [x2, y2] of points) {
      if (x1 === x2 || y1 === y2) {
        continue;
      }

      if (rows.get(x1).has(y2) && rows.get(x2).has(y1)) {
        res = Math.min(res, Math.abs(x1 - x2) * Math.abs(y1 - y2));
      }
    }
  }

  return res < Number.MAX_VALUE ? res : 0;
}
