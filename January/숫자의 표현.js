function solution(n, lost, reserve) {
  let first_lost_length = lost.length;
  let borrowCnt = 0;
  lost.sort((a, b) => b - a);
  reserve.sort((a, b) => b - a);
  let lost_cur = lost.pop();
  let reserve_cur = reserve.pop();
  while (lost_cur !== undefined || reserve_cur !== undefined) {
    if (lost_cur - 1 == reserve_cur) {
      borrowCnt++;
      lost_cur = lost.pop();
      reserve_cur = reserve.pop();
    } else if (lost_cur + 1 == reserve_cur) {
      borrowCnt++;
      lost_cur = lost.pop();
      reserve_cur = reserve.pop();
    } else if (lost_cur < reserve_cur) {
      lost_cur = lost.pop();
    } else if (lost_cur > reserve_cur) {
      reserve_cur = reserve.pop();
    }
  }
  return n - first_lost_length + borrowCnt;
}
// console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(3, [3], [1]));
console.log(solution(13, [13, 6, 1], [11, 9, 8, 7]));
