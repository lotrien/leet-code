/**
 * 905. Sort Array By Parity
 */
const sortArrayByParity = function(a) {
  const res = [];
  const odd = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      res.push(a[i]);
    } else {
      odd.push(a[i]);
    }
  }

  return res.concat(odd);
}

const sortArrayByParity = function(a) {
  const res = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      res.push(a[i]);
    }
  }

  for (let j = 0; j < a.length; j++) {
    if (a[j] % 2 === 1) {
      res.push(a[j])
    }
  }

  return res;
}

// most optimal solution
const sortArrayByParity = function(a) {
  let f = 0;
  let s = a.length - 1;

  while (f < s) {
    if (a[f] % 2 > a[s] % 2) {
      [a[f], a[s]] = [a[s], a[f]];
    }

    if (a[f] % 2 === 0) {
      f++;
    }
    if (a[s] % 2 === 1) {
      s--;
    }
  }

  return a;
}
