function solution(sizes) {
  let my_long = 0;
  let my_short = 0;
  for (let size of sizes) {
    let your_long = Math.max(...size);
    let your_short = Math.min(...size);
    if (my_long < your_long) {
      my_long = your_long;
    }
    if (my_short < your_short) {
      my_short = your_short;
    }
  }
  return my_long * my_short;
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]);
solution([
  [14, 4],
  [19, 6],
  [6, 16],
  [18, 7],
  [7, 11],
]);
