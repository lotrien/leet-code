/**
 * 150. Evaluate Reverse Polish Notation
 */
const operands = {
  '/': (f, s) => {
    const a = f / s;
    return a > 0 ? Math.floor(a) : Math.ceil(a);
  },
  '*': (f, s) => f * s,
  '+': (f, s) => f + s,
  '-': (f, s) => f - s,
};

var evalRPN = function(tokens) {
  if (!tokens || !tokens.length) {
    return [];
  }

  const stack = [];

  for (let token of tokens) {
    const num = parseInt(token, 10);

    if (num || num === 0) {
      stack.push(num);
    } else {
      const s = stack.pop();
      const f = stack.pop();
      
      const subRes = operands[token](f, s);

      stack.push(subRes);
    }
  }
  
  return stack.pop();
}
