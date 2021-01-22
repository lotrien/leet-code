/**
 * 739. Daily Temperatures
 */
const dailyTemperatures = function(t) {
  const res = [];
  const stack = [];

  for (let i = t.length - 1; i >= 0; i--) {
    while (stack.length && t[i] >= t[stack[stack.length - 1]]) {
      stack.pop();
    }

    res[i] = stack.length ? stack[stack.length - 1] - i : 0;
    stack.push(i);
  }

  return res;
}
