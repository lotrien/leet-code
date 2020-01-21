/**
 * 1323. Maximum 69 Number
 */
const maximum69Number  = function(num) {
  let max = num;

  const map = new Map([['9', '6'], ['6', '9']]);
  const stringify = String(num);

  for (let i = 0; i < stringify.length; i++) {
    const newMax = stringify.slice(0, i) + map.get(stringify[i]) + stringify.slice(i+1);
    if (max < Number(newMax)) {
      max = newMax;
    }
  }
  return max;
};

// optimal
const maximum69Number = function(num) {
  let max = num;

  const stringify = String(num);

  for (let i = 0; i < stringify.length; i++) {
    const newMax = stringify[i] === '6' ? stringify.replace(stringify[i], '9') : max;
    if (max < Number(newMax)) {
      max = newMax;
    }
  }
  return max;
}
