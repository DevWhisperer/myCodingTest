function solution(n) {
  n = String(n);
  n = [...n];
  n = n.sort((a, b) => b - a);
  n = n.join("");
  n = Number(n);
  return n;
}

solution(118372);
