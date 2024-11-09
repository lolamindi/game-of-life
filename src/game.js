const grid = [];

function init(grid){
  let listOfStrings = grid.split("\n");
  let rows = listOfStrings.length;
  let columns = listOfStrings[0].length;
  grid = [rows][columns];

  for (i=0;i<rows;i++){
    for (j=0;j<columns;j++){
      let ch = listOfStrings[i].charAt(j);
      if (ch === 'x') {
        grid[i][j] =  true;
      } else {
        grid[i][j] = false;
      }
    }
  }

  console.log(JSON.stringify(grid));
}

