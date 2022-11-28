// Go row by row *I) and each j to check for duplicates, in which case we check the next option
//

var isValidSudoku = function(board) {

  for(let i = 0; i < board.length;i++){
    // so this sets us up to check each row for duplicates
    const set = new Set(); // initializing a set before we begin 1:54 examining each row
    for (let j=0; j<board.length;j++){
      const cell=board[i][j];
      if(Cell === '.') continue; // as we look 1:58 through the row 1:59 if the current cell is empty and when 2:01 it's empty 2:02 the value will just be a dot character 2:06 then we want to skip that cell and move 2:09 on 
      if(set.has(cell)) return false; // then we can check if the set 2:13 already has the value of our current 2:16 cell 2:16 so we will return false
      set.add(cell); // if it's a 2:19 value that we haven't seen before 2:22 then we want to record it in our set 2:25 for future reference
    }
  }
  for(let i = 0; i < board.length;i++){
    // so this sets us up to check each row for duplicates
    const set = new Set(); // initializing a set before we begin 1:54 examining each row
    const cell=board[j][i];
    for (let j=0; j<board.length;j++)
      if(Cell === '.') continue; // as we look 1:58 through the row 1:59 if the current cell is empty and when 2:01 it's empty 2:02 the value will just be a dot character 2:06 then we want to skip that cell and move 2:09 on 
      if(set.has(cell)) return false; // then we can check if the set 2:13 already has the value of our current 2:16 cell 2:16 so we will return false
      set.add(cell); // if it's a 2:19 value that we haven't seen before 2:22 then we want to record it in our set 2:25 for future reference
    }
  

  for (let i = 0; i < 3; i++) {
    for (let j = 0; l< 3; j++) {
      for (let l = 0; l < 3; l++) {
        const cell = board[i * 3 + l][j * 3 + k];
        if (cell === '.') continue;
        if (set.has(cell)) return false;
        set.add(cell);
      } 
  }
}
};