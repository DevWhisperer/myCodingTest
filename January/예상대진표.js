//https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  answer = 1;
  while (true) {
    a = Math.floor((a + 1) / 2);
    b = Math.floor((b + 1) / 2);

    if (a == b) {
      break;
    }
    answer++;
  }
  return answer;
}

//다음 차례의 인덱스를 반환, 그 인덱스가 서로 같아질때까지 반복, 같아진 순간의 반복횟수가 정답
