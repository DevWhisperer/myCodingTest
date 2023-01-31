function solution(d, budget) {
  d.sort((a, b) => b - a);
  let answer = 0;
  while (d.length > 0) {
    let cur = d.pop();
    if (budget >= cur) {
      answer++;
      budget -= cur;
    } else break;
  }
  return answer;
}

solution([1, 3, 2, 5, 4], 9);
solution([2, 2, 3, 3], 10);
