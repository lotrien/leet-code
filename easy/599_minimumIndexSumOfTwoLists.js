/**
 * 599. Minimum Index Sum of Two Lists
 */
var findRestaurant = function(list1, list2) {
  const firstMap = new Map();

  for (let i = 0; i < list1.length; i++) {
    firstMap.set(list1[i], i);
  }

  const mid = new Map();
  for (let i = 0; i < list2.length; i++) {
    const elem = list2[i];
    if (firstMap.has(elem)) {
      mid.set(elem, firstMap.get(elem) + i);
    }
  }

  let min = Number.MAX_VALUE;
  let res = [];

  for (let [key, value] of mid) {
    if (min === value) {
      res.push(key);
    } else if (value < min) {
      res = [key]
      min = value;
    }
  }

  return res;
}
