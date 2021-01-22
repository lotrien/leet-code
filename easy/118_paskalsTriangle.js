/**
 * 118. Pascal's Triangle
 */
const generate = function(numRows) {
  if (!numRows) {
    return [];
  }

  const output = [[1]];

  if (numRows === 1) {
    return output;
  }

  let row = 2;
  while (row <= numRows) {
    let newRow = [];
    const prevRow = output[row - 1 - 1];

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

  return output;
}