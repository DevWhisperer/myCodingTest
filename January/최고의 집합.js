function solution(n, s) {
  if (n > s) {
    return [-1];
  }
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(s / n));
  }
  let rest = s - Math.floor(s / n) * n;
  arr.map((v, i) => (i < arr.length - rest ? v : v + 1));
  arr = arr.map((v, i) => (i < arr.length - rest ? v : v + 1));
  return arr;
}

solution(2, 9);
solution(2, 1);
solution(2, 8);
