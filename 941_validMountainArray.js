/**
 * 941. Valid Mountain Array
 */
var validMountainArray = function(a) {
  if (a.length < 3) {
    return false;
  }
  let i = 0;
  while (a[i] < a[i+1]) {
    i++;
  }

  if (i === a.length - 1 || i === 0) {
    return false;
  }

  for (let j = i; j < a.length; j++) {
    if (a[j] <= a[j+1]) {
      return false;
    }
  }

  return true;
}
