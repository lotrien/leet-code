/**
 * 692. Top K Frequent Words
 */
const topKFrequent = function(words, k) {
  const map = {};

  for (let word of words) {
    map[word] = map[word] + 1 || 1;
  }

  const candidates = Object.keys(map);

  return candidates.sort((a, b) => {
    let countCompare = map[b] - map[a];

    return (countCompare === 0) ? a.localeCompare(b) : countCompare;
  }).slice(0, k);
}
