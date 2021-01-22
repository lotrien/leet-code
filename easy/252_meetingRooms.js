/**
 * 252. Meeting Rooms
 */
// Brute force O(n^2)
const canAttendMeetings = function(intervals) {
  for (let i = 0; i < intervals.length; i++) {
    for (let j = i + 1; j < intervals.length; j++) {
      if (overlaps(intervals[i], intervals[j])) {
        return false;
      }
    }
  }

  return true;
}

const overlaps = function(first, second) {
  return Math.min(first[1], second[1]) > Math.max(first[0], second[0]);
}

// Sort solution
const canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}
