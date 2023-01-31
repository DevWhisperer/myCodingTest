function solution(board, moves) {
  let cnt = 0;
  let stack = [];
  for (let move of moves) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][move - 1] != 0) {
        stack.push(board[j][move - 1]);
        board[j][move - 1] = 0;
        if (stack[stack.length - 1] == stack[stack.length - 2]) {
          stack.pop();
          stack.pop();
          cnt += 2;
        }
        break;
      }
    }
  }
  return cnt;
}
solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
