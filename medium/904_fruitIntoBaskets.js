/**
 * 904. Fruit Into Baskets
 */
const totalFruit = function(trees) {
  if (!trees || !trees.length) {
    return 0;
  }

  let lastFruit = -1;
  let secondLastFruit = -1;
  let lastFruitCount = 0;

  let currentMax = 0; // current contiguous subarray of two types of trees
  let max = 0;

  for (let fruit of trees) {
    if (fruit === lastFruit || fruit === secondLastFruit) {
      currentMax++;
    } else {
      currentMax = lastFruitCount + 1;
    }

    if (fruit === lastFruit) {
      lastFruitCount++;
    } else {
      lastFruitCount = 1;
    }

    if (fruit !== lastFruit) {
      secondLastFruit = lastFruit;
      lastFruit = fruit;
    }

    max = Math.max(max, currentMax);
  }

  return max;
}