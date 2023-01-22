//https://school.programmers.co.kr/learn/courses/30/lessons/12949

function solution(arr1, arr2) {
  let answer = new Array(arr1.length);
  for (let i = 0; i < answer.length; i++) {
    answer[i] = new Array(arr2[0].length).fill(0);
  }
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr1[0].length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return answer;
}

//이차열 배열의 개념과 다중for문의 활용. 빈 이중 배열 만드는법. fill로 채우기.
