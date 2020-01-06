/**
 * 1309. Decrypt String from Alphabet to Integer Mapping
 */
const freqAlphabets = function(s) {
  if (!s.length) {
    return;
  }

  let res = [];
  let i = s.length - 1;

  while (i >= 0) {
    const current = (s[i] === '#') ? Number(s.substring(i - 2, i)) : Number(s[i]);

    res.push(String.fromCharCode(96 + current));

    if (s[i] === '#') {
      i = i - 3;
    } else {
      i--;
    }
  }

  return res.reverse().join('');
}

// brute force with corresponding map
const map = new Map([
  ['1', 'a'], ['2', 'b'], ['3', 'c'], ['4', 'd'], ['5', 'e'], ['6', 'f'],
  ['7', 'g'], ['8', 'h'], ['9', 'i'], ['10', 'j'], ['11', 'k'], ['12', 'l'],
  ['13', 'm'], ['14', 'n'], ['15', 'o'], ['16', 'p'], ['17', 'q'], ['18', 'r'],
  ['19', 's'], ['20', 't'], ['21', 'u'], ['22', 'v'], ['23', 'w'], ['24', 'x'],
  ['25', 'y'], ['26', 'z'],
]);

const freqAlphabets = function(s) {
  if (!s.length) {
    return;
  }

  let res = [];
  let i = s.length - 1;

  while (i >= 0) {
    if (s[i] === '#') {
      res.push(map.get(s.substring(i-2, i)));
      i = i - 3;
    } else {
      res.push(map.get(s[i]));
      i--;
    }
  }

  return res.reverse().join('');
}
