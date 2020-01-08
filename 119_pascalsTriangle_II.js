/**
 * 119. Pascal's Triangle II
 */
// not optimal by space (stores all prev rows)
const getRow = function(rowIndex) {
  if (rowIndex === undefined) {
    return [];
  }

  const output = [[1], [1, 1]];

  if (rowIndex <= 1) {
    return output[rowIndex];
  }

  let row = 2;

  while (row <= rowIndex) {
    let newRow = [];
    const prevRow = output[row - 1];

    for (let i = 0; i <= prevRow.length; i++) {
      if (i === 0 || i === prevRow.length) {
        newRow.push(prevRow[i] || 1);
      } else {
        newRow.push(prevRow[i - 1] + prevRow[i]);
      }
    }

    output.push(newRow);
    row++;
  }

  return output[rowIndex];
}

const getRow = function(rowIndex) {
  let row = [1];

  if (rowIndex === 0) {
    return row;
  }

  let prevRow = getRow(rowIndex - 1);

  for (let i = 0; i < prevRow.length - 1; i++) {
    row.push(prevRow[i] + prevRow[i+1]);
  }

  row.push(1);

  return row;
}
