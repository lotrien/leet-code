/**
 * 171. Excel Sheet Column Number
 */
const titleToNumber = function(s) {
  let res = 0;
  let idx = 0;

  while (s !== '') {
    let char = s.substr(s.length - 1);
    res += (char.charCodeAt() - 64) * Math.pow(26, idx);

    s = s.substr(0, s.length - 1);
    idx++;
  }

  return res;
}
