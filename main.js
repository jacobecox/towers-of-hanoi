var board = [['---', 5, 4, 3, 2, 1],
['---'],
['---']];


var startingBoard = board.map(function (peg) {
    board.join('/n')
    return peg.join('');
});



var firstMove = function (fromPeg, toPeg) {
  if (fromPeg == 1 && toPeg == 2) {
    if (board[0] > board[1]) {
      board[0].pop();
      board[1].push(1);
      
      return 'That move was successful, the board is now: ' + board;
    } else return 'That move was unsuccessful, the board remains: ' + board;
  };
  if (fromPeg == 1 && toPeg == 3) {
    if (board[0] > board[2]) {
      board[0].pop();
      board[2].push(1);
      
      return 'That move was successful, the board is now: ' + board;
    } else return 'That move was unsuccessful, the board remains: ' + board;
  };
}

 console.log(firstMove(1, 3));