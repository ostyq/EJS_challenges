var size = 16;

var board = "";

for (var i = 0; i < size/2; i++) {
  for (var j = 0; j < size; j++) {
    if ((i + j) % 2 === 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);