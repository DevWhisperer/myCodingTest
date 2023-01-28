function solution(n) {
  let sqrt = n ** 0.5;
  return Number.isInteger(sqrt) ? (sqrt + 1) ** 2 : -1;
}
solution(121);
solution(3);
