/**
 * 841. Keys and Rooms
 */
var canVisitAllRooms = function(rooms) {
  const seen = new Array(rooms.length).fill(false);
  seen[0] = true;
  const stack = [0];

  while (stack.length) {
    const node = stack.pop();

    for (let i of rooms[node]) {
      if (!seen[i]) {
        seen[i] = true;
        stack.push(i);
      }
    }
  }

  return seen.every(Boolean);
}
