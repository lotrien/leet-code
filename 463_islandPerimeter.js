/**
 * 463. Island Perimeter
 */
const islandPerimeter = function(grid) {
  let p = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        const left = !grid[row][col-1] ? 1 : 0;
        const top = (grid[row-1] && !grid[row-1][col]) || !grid[row-1] ? 1 : 0;
        const right = !grid[row][col+1] ? 1 : 0;
        const bottom = (grid[row+1] && !grid[row+1][col]) || !grid[row+1] ? 1 : 0;

        p += left + top + right + bottom;
      }
    }
  }

  return p;
}
