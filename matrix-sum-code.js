
// Sum of each Row in an n x n Matrix

function sumRows(matrix) {
  const numRows = matrix.length;

  const numCols = matrix[0].length;

  const newArr = [];

  for (let i = 0; i < numRows; i++) {
    let rowSum = 0;

    for (let j = 0; j < numCols; j++) {
      rowSum += matrix[i][j];
    }
    newArr.push(rowSum);
  }

  return newArr;
}

console.log(sumRows([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));


// Sum of each Column in an n x n Matrix

function sumColumns (matrix) {

  const numRows = matrix.length;
  const numColumn = matrix[0].length;
  const newArr = [];

  for (let j=0; j<numColumn; j++) {
    let colSum = 0;

    for (let i=0; i<numRows; i++) {
      colSum += matrix[i][j];
    }
    newArr.push(colSum);
  }
  return newArr;
}

console.log(sumColumns([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));

// Sum of the main Diagonal in an n x n Matrix


function diagonalSum (matrix) {

  const numRows = matrix[0].length;
  let diagSum = 0;

  for (let i=0; i<numRows; i++) {

    diagSum += matrix[i][i];
  }
  return diagSum;
}

console.log(diagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));


// Sum of the Anti Diagonal in an n x n Matrix

function antiDiagonalSum (matrix) {

  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let antiDiag = 0;

  for (let i=0; i<numRows; i++){
    antiDiag += matrix[i][numCols - 1 - i];
    console.log(numCols)
  }
  return antiDiag;
}

console.log(antiDiagonalSum([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));