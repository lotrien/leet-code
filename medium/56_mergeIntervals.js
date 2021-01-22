/**
 * 56. Merge Intervals
 */
const merge = function(intervals) {
  if (intervals.length <= 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  let output = [];
  let currentInt = intervals[0];

  output.push(currentInt);

  for (let interval of intervals) {
    let end = currentInt[1];
    let nextBegin = interval[0];
    let nextEnd = interval[1];

    if (end >= nextBegin) {
      currentInt[1] = Math.max(end, nextEnd);
    } else {
      currentInt = interval;
      output.push(currentInt);
    }
  }

  return output;
}
