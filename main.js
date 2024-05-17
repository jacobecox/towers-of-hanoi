// GAME SETUP

var board = [['---', 5, 4, 3, 2, 1],
['---'],
['---']];

// I got the board to project right in startingBoard but I could not call any array helper methods on it since it created a new array using .map. Not sure how to work around that but the rest of the game just printed board rather than startingBoard.
var startingBoard = board.map(function (peg) {
    board.join('/n')
    return peg.join('');
});

var winnerBoard1 = [['---'],
['---'],
['---', 5, 4, 3, 2, 1]];

var winnerBoard2 = [['---'],
['---', 5, 4, 3, 2, 1],
['---']];


// GAME PLAY

// I feel like I could've made a move that worked for every move after but I couldn't figure out how to write .push() to fit any given number instead of having to add an explicit number in the argument.
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

// nextMove worked well except I cannot think of a way to show the value of board[0], board[1], or board[2] being greater than each other since the conditional I wrote checks the index length and not the value of the number.
var nextMove = function (fromPeg, toPeg) {
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
  if (fromPeg == 2 && toPeg == 1) {
    if (board[1] > board[0]) {
      board[1].pop();
      board[0].push(1);
      
      return 'That move was successful, the board is now: ' + board;
    } else return 'That move was unsuccessful, the board remains: ' + board;
  };
  if (fromPeg == 3 && toPeg == 1) {
    if (board[2] > board[0]) {
      board[2].pop();
      board[0].push(1);
      
      return 'That move was successful, the board is now: ' + board;
    } else return 'That move was unsuccessful, the board remains: ' + board;
  };
  if (fromPeg == 2 && toPeg == 3) {
    if (board[1] > board[2]) {
      board[1].pop();
      board[2].push(1);
      
      return 'That move was successful, the board is now: ' + board;
    } else return 'That move was unsuccessful, the board remains: ' + board;
  };
}



// GAME RULES

// I wasn't too sure how else to compare arrays using == or === except by converting them to strings. I understand that would not work if they had objects or functions in the arrays but for this case it worked.
var checkWinner = function() {
  if (JSON.stringify(board) === JSON.stringify(winnerBoard1)) {
    board = [['---', 5, 4, 3, 2, 1],
    ['---'],
    ['---']];
  console.log('Congratulations! You Win! Board is now: ' + board);
} else if (JSON.stringify(board) === JSON.stringify(winnerBoard2)) {
  board = [['---', 5, 4, 3, 2, 1],
  ['---'],
  ['---']];
console.log('Congratulations! You Win! Board is now: ' + board);
} else return;
};