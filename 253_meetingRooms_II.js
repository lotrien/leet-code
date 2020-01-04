/**
 * 253. Meeting Rooms II
 */
const minMeetingRooms = function(intervals) {
  if (!intervals.length) {
    return 0;
  }

  let rooms = 0;

  const starts = intervals.sort((a, b) => a[0] - b[0]).map(value => value[0]);
  const ends= intervals.sort((a, b) => a[1] - b[1]).map(value => value[1]);


  let start = 0;
  let end = 0;

  while (start < intervals.length) {
    if (starts[start] >= ends[end]) {
      rooms--;
      end++;
    }

    rooms++;
    start++;
  }

  return rooms;
}
