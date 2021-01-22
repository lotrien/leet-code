/**
 * 286. Walls and Gates
 */
function _bfs(rooms, row, col, distance, visited) {
  const lessThanLowerBound = row < 0 || col < 0;
  const moreThanHigherBound = row >= rooms.length || col >= rooms[0].length;

  if (lessThanLowerBound || moreThanHigherBound || rooms[row][col] === -1 || rooms[row][col] < distance) {
    return;
  }

  rooms[row][col] = distance;

  _bfs(rooms, row - 1, col, distance + 1);
  _bfs(rooms, row + 1, col, distance + 1);
  _bfs(rooms, row, col - 1, distance + 1);
  _bfs(rooms, row, col + 1, distance + 1);

}

var wallsAndGates = function(rooms) {
  if (!rooms || !rooms.length) {
    return;
  }

  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === 0) {
        _bfs(rooms, row, col, 0);
      }
    }
  }
}
