function singleArrayChecker(array){
  //TODO: check each row, column, and box against a 'validArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]'
  const validArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return array.every( (num, i) => num === validArray[i] );
}

// Checking the rows
function rowChecker(matrix){  
  let arr = matrix.map(row => row.sort());
  return arr.every(seqArray => singleArrayChecker(seqArray));
}

// Checking the columns
function columnChecker(matrix) {
  let colArr = [[],[],[],[],[],[],[],[],[]];
  matrix.forEach(col => col.forEach((num, i) => colArr[i].push(num)));
  return rowChecker(colArr);
}

// Checking the boxes
function boxBuilder(matrix, row1, col1){
  let boxArray= [
    matrix[row1][col1],
    matrix[row1][col1+1],
    matrix[row1][col1+2],
    matrix[row1+1][col1],
    matrix[row1+1][col1+1],
    matrix[row1+1][col1+2],
    matrix[row1+2][col1],
    matrix[row1+2][col1+1],
    matrix[row1+2][col1+2]
  ]
  return boxArray
}

function boxChecker(matrix){
  let boxMatrix = [
    boxBuilder(matrix, 0, 0),
    boxBuilder(matrix, 0, 3),
    boxBuilder(matrix, 0, 6),
    boxBuilder(matrix, 3, 0),
    boxBuilder(matrix, 3, 3),
    boxBuilder(matrix, 3, 6),
    boxBuilder(matrix, 6, 0),
    boxBuilder(matrix, 6, 3),
    boxBuilder(matrix, 6, 6)
  ]
  return rowChecker(boxMatrix);
}

function validSolution (matrix) {
  const copy1 = [...matrix.map(arr => [...arr])]
  const copy2 = [...matrix.map(arr => [...arr])]
  const copy3 = [...matrix.map(arr => [...arr])]
  const checker = [
      rowChecker(copy1),
      columnChecker(copy2),
      boxChecker(copy3)
  ]
  if (checker.every(seq => seq)){
      return true
  } else {
      return false
  }
}
