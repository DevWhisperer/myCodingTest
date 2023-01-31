function solution(n) {
  const jaegui = (asc) => {
    return n % asc == 1 ? asc : jaegui(asc + 2);
  };
  if (n % 2 == 1) {
    return 2;
  } else {
    return jaegui(3);
  }
}

console.log(solution(10));
console.log(solution(12));
