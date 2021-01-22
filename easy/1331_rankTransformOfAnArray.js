/**
 * 1331. Rank Transform of an Array
 */
const arrayRankTransform = function(arr) {
  const res = [];
  const ranks = new Map();
  let rank = 0;

  let prev = null;

  const sorted = [...arr].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === prev) {
      ranks.set(sorted[i], rank);
    } else {
      ranks.set(sorted[i], ++rank);
    }

    prev = sorted[i];
  }

  for (let i = 0; i < arr.length; i++) {
    res.push(ranks.get(arr[i]));
  }
  
  return res;
}
