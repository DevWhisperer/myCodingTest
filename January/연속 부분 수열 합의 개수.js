//https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  elements = [...elements, ...elements];
  let result = new Set();
  for (let i = 0; i < elements.length / 2; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length / 2; j++) {
      sum += elements[i + j];
      result.add(sum);
    }
  }
  return result.size;
}

//set 개념. element를 복사해서 편하게 함
