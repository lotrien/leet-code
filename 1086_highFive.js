/**
 * 1086. High Five
 */
const highFiveSum = function(arr) {
  return arr.sort((a, b) => b - a).reduce((acc, val, i) => i <= 4 ? acc + val : acc, 0);
}

const highFive = function(items) {
  const FIVE = 5;
  const map = {};

  items.forEach(([id, score]) => {
    if (!map[id]) {
      map[id] = [score];
    } else {
      map[id].push(score);
    }
  });

  return Object.keys(map).map(id => {
    const average = Math.floor(highFiveSum(map[id]) / FIVE);
    return [Number(id), average];
  })
}
