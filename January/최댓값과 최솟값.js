function solution(s) {
  let list = s.split(" ");
  list.sort((a, b) => a - b);
  let answer = list.shift() + " " + list.pop();
  return answer;
}

solution("1 2 3 4");
solution("-1 -2 -3 -4");
solution("-1 -1");
