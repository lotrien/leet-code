/**
 * 394. Decode String
 */
var decodeString = function(s) {
  if (!s.length) {
    return s;
  }

  const stack = [];

  for (let char of s) {
    if (char !== ']') {
      stack.push(char);
    } else {
      let current = stack.pop();
      let str = '';

      while (current !== '[') {
        str = current + str;
        current = stack.pop();
      }

      let num = '';
      current = stack.pop();

      while (!Number.isNaN(Number(current))) {
        num = current + num;
        current = stack.pop();
      }
      stack.push(current);
      stack.push(str.repeat(Number(num)));
    }
  }

  return stack.join('');
}
