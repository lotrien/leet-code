/**
 * 200. Number of Islands
 */
const numIslands = function(grid) {
  let count = 0;

  const _bfs = function(grid, row, col) {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[row].length || grid[row][col] === '0') {
      return;
    }
  
    grid[row][col] = '0';
  
    _bfs(grid, row+1, col);
    _bfs(grid, row-1, col);
    _bfs(grid, row, col-1);
    _bfs(grid, row, col+1);
  }

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === '1') {
        count++;
        _bfs(grid, row, col);
      }
    }
  }

  return count;
}
