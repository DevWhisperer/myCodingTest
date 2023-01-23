//https://school.programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
  let answer = 0;
  n = n.toString(k);
  n = n.split("0");
  for (let num of n) {
    if (num == "" || num == "1") continue;
    num = Number(num);

    for (let i = 2; i <= num ** 0.5; i++) {
      if (num % i == 0) {
        answer--;
        break;
      }
    }
    answer++;
  }
  return answer;
}

//처음에 제곱근이 딱 떨어지는 경우를 생각못함(사각지대)
