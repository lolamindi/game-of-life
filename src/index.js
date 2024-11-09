let grid = [];  

function init(gameString) {
  let listOfStrings = gameString.split("\n");
  let rows = listOfStrings.length;
  let columns = listOfStrings[0].length;
  grid = Array.from({ length: rows }, () => Array(columns).fill(false));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      let ch = listOfStrings[i].charAt(j);
      grid[i][j] = ch === 'x';
    }
  }
}

function print() {
  console.log(JSON.stringify(grid));
}

function advanceGame() {
  let rows = grid.length;
  let columns = grid[0].length;
  let nextGrid = Array.from({ length: rows }, () => Array(columns).fill(false));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      nextGrid[i][j] = advanceCell(i, j);
    }
  }
  grid = nextGrid;
}

function advanceCell(i, j) {
  let livingNeighbors = calculateAliveNeighbors(i, j);
  if (grid[i][j]) {
    return livingNeighbors === 2 || livingNeighbors === 3;
  } else {
    return livingNeighbors === 3;
  }
}

function calculateAliveNeighbors(x, y) {
  let rows = grid.length;
  let columns = grid[0].length;
  let count = 0;

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (i < 0 || i >= rows || j < 0 || j >= columns) continue;
      if (i === x && j === y) continue;
      if (grid[i][j]) count++;
    }
  }

  return count;
}


let gameString = "x..x\n..xx";
init(gameString);


print();
advanceGame();
print();
