/**
 * 1324. Print Words Vertically
 */
const printVertically = function(s) {
  const res = [];
  const words = s.split(' ');
  let longest = 0;

  words.forEach(value => {
    if (value.length > longest) {
      longest = value.length;
    }
  });

  for (let i = 0; i < longest; i++) {
    res[i] = '';

    let prevSpace = '';

    for (let j = 0; j < words.length; j++) {
      if (!words[j][i]) {
        prevSpace += ' ';
      } else {
        res[i] += prevSpace + words[j][i];
        prevSpace = '';
      }
    }
  }

  return res;
}