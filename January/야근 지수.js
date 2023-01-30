function solution(n, works) {
  if (works.reduce((a, c) => a + c) < n) {
    return 0;
  }
  works.sort((a, b) => a - b);
  const lastIndex = works.length - 1;
  while (n > 0) {
    let max = works[lastIndex];
    for (let i = lastIndex; i >= 0; i--) {
      if (n > 0 && works[i] == max) {
        works[i]--;
        n--;
      } else break;
    }
  }
  let answer = 0;
  for (let i = 0; i < works.length; i++) {
    answer += works[i] ** 2;
  }
  return answer;
}

solution(4, [4, 3, 3]);
solution(1, [2, 1, 2]);
solution(3, [1, 1]);
