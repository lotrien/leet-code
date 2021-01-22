/**
 * 1055. Shortest Way to Form String
 */
const shortestWay = function(source, target) {
  let res = [];
  let t = 0;

  while (t < target.length) {
    let sub = '';

    for (let char of source) {
      let targetLetter = target[t];
      if (targetLetter === char) {
        sub += char;
        t++;
      }
    }

    if (!sub) {
      return -1;
    }

    res.push(sub);
  }

  return res.length;
}
