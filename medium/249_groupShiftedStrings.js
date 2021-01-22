/**
 * 249. Group Shifted Strings
 */
function transfer(str, letter) {
  if (!str.length) {
    return '';
  }

  const gap = str.charCodeAt(0) - 97;

  let result = "a";

  for (let i = 1; i < str.length; i++) {
    let index = (str.charCodeAt(i) - 97) - gap;
    if (index < 0) {
      index += 26;
    }
    result += letter[index];
  }

  return result;
}

const groupStrings = function(strings) {
  const letter = "abcdefghijklmnopqrstuvwxyz".split("");
  const dic = {};

  strings.sort().forEach(str => {
    var key = transfer(str, letter);
    dic[key] ? dic[key].push(str) : (dic[key] = [str]);
  });

  return Object.values(dic);
}
