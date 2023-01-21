//https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
  const gcd = (a, b) => (a % b == 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  let mother = lcm(denom1, denom2);
  let son = (mother / denom1) * numer1 + (mother / denom2) * numer2;

  let motherSonGcd = gcd(mother, son);
  return [son / motherSonGcd, mother / motherSonGcd];
}
