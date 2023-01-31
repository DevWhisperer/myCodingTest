function solution(n, m) {
  const gcd = (a, b) => {
    return a % b == 0 ? b : gcd(b, a % b);
  };
  const lcm = (a, b) => {
    return (a * b) / gcd(a, b);
  };
  return [gcd(n, m), lcm(n, m)];
}

solution(3, 12);
solution(2, 5);
