function solution(s) {
  let answer = "";
  let a = [...s].sort();
  while (a.length > 0) {
    answer += a.pop();
  }
  return answer;
}

solution("Zbcdefg");
