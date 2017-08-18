/*
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  EC: Make your solution work for a grid of any size.
 *
 */

const makeBoard = (n) => {
  // this function will build a board nXn for your robot to traverse
  let board = [];
  for (let i = 0; i < n; i++) {
    board.push([]);
    for (let j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.toggle = (i, j) => {
    // this function is given to help you toggle the board's square
    board[i][j] = !board[i][j]
  };
  board.hasBeenVisited = (i, j) => {
    // this function is given to help you check to see if you've been at the square
    return board[i][j]
  };
  return board;
};

// write your code here for t
const robotPath = (board) => {
  let row  = 0;
  let col = 0;
  board.toggle(row, col);
  let steps = 0;
  while ((row < (board.length - 1)) || (col < (board.length - 1))) {
    if (((row - 1) >= 0) && !board.hasBeenVisited(row-1, col)) { // up
      row--;
      steps++;
      board.toggle(row, col);
    }
    else if (((row + 1) < board.length) && !board.hasBeenVisited(row + 1, col)) { //down
      row++;
      steps++;
      board.toggle(row, col);
    }
    else if (((col - 1) >= 0) && !board.hasBeenVisited(row, col - 1)) { // left
      col--;
      steps++;
      board.toggle(row, col);
    }
    else if (((col + 1) < board.length) && !board.hasBeenVisited(row, col + 1)) { // right
      col++;
      steps++;
      board.toggle(row, col);
    }
  }
  return steps;
};
