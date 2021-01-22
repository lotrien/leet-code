/**
 * 36. Valid Sudoku
 */
const isValidSudoku = function(board) {
  const rows = {};
  const cols = {};
  const boxes = {};

  for (let i = 0; i < 9; i++) {
    rows[i] = {};
    cols[i] = {};
    boxes[i] = {};
  }

  for (let row = 0; row < 9; row++) {
    let currentRow = rows[row];
    for (let col = 0; col < 9; col++) {
      let value = board[row][col];
      let currentCol = cols[col];
      let currentBox = boxes[Math.floor(row / 3) * 3 + Math.floor(col / 3)]

      if (value !== '.') {
        if (currentRow[value] || currentCol[value] || currentBox[value]) {
          return false;
        } else {
          currentRow[value] = true;
          currentCol[value] = true;
          currentBox[value] = true;
        }
      }
    }
  }

  return true;
}
