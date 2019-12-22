/**
 * 14. Longest Common Prefix
 */
const longestCommonPrefix = function(s) {
  if (!s.length) {
    return '';
  }

  const minLen = s.reduce((acc, str) => Math.min(acc, str.length), s[0].length);

  for (let i = 0; i < minLen; i++) {
    for (const str of s) {
      if (str[i] !== s[0][i]) {
        return str.substr(0, i);
      }
    }
  }
  
  return s[0].substr(0, minLen);
}

