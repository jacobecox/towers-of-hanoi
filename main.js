var board = [['---', 5, 4, 3, 2, 1],
['---'],
['---']];

var startingBoard = board.map(function (peg) {
    board.join('/n')
    return peg.join('');
});

console.log(startingBoard);
