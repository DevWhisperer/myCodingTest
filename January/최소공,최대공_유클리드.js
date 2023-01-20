const gcd = (a, b) => {
  return a % b == 0 ? b : gcd(b, a % b);
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b); // A*B = G*L 법칙을 이용
};
