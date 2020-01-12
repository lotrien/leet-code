/**
 * 412. Fizz Buzz
 */
// Brute force
const fizzBuzz = function(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push('FizzBuzz');
    } else if (i % 3 === 0) {
      res.push('Fizz');
    } else if (i % 5 === 0) {
      res.push('Buzz');
    } else {
      res.push(String(i));
    }
  }

  return res;
}

const fizzBuzz = function(n) {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const by3 = i % 3 === 0;
    const by5 = i % 5 === 0;

    let str = '';

    if (by3) {
      str += 'Fizz';
    }
    if (by5) {
      str += 'Buzz';
    }

    if (!str) {
      str = String(i);
    }

    res.push(str);
  }

  return res;
};

// most optimal and scalable solution
const fizzBuzz = function(n) {
  const map = new Map([ ['3', 'Fizz'], ['5', 'Buzz'] ]);
  const res = [];

  for (let i = 1; i <= n; i++) {
    let str = '';

    for (let [key, value] of map) {
      if (i % key === 0) {
        str += value;
      }
    }

    if (!str) {
      str = String(i);
    }

    res.push(str);
  }

  return res;
}
