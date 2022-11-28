// Go row by row *I) and each j to check for duplicates, in which case we check the next option

var isValidSudoku = function(board) {

  const rows=[], cols=[]. boxes=[];
  for (let i = 0; i < 9; i++) {
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set());
  }

  for(let i = 0; i < board.length;i++){
    // so this sets us up to check each row for duplicates
    
    for (let j=0; j<board.length;j++) {
      const cell=board[i][j];
      if(Cell === '.') continue; // as we look 1:58 through the row 1:59 if the current cell is empty and when 2:01 it's empty 2:02 the value will just be a dot character 2:06 then we want to skip that cell and move 2:09 on 
      if(row[i].has(cell) || cols[j].has(cell)) return false;
      rows[i].add(cell);
      cols[j].add(cell);
    }  return true 

  }
};