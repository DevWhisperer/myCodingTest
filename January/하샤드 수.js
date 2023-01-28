function solution(x) {
  // 합 구하기
  let ha = String(x);
  let total = 0;
  for (let i = 0; i < ha.length; i++) {
    total += Number(ha[i]);
  }

  // 나누어 떨어지는지 판별하기
  if (x % total == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
