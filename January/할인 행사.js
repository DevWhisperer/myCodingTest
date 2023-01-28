//https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let answer = 0;
  let discount_obj = {};
  want_obj = {};
  for (let i = 0; i < want.length; i++) {
    want_obj[want[i]] = number[i];
  }

  for (let i = 0; i < discount.length - 9; i++) {
    if (!want.includes(discount[i])) {
      continue;
    }
    // discount_obj 초기화
    for (let j = 0; j < want.length; j++) {
      discount_obj[want[j]] = number[j];
    }
    for (let j = 0; j < 10; j++) {
      discount_obj[discount[i + j]] -= 1;
    }
    // 갯수 확인
    answer++;
    for (let j = 0; j < want.length; j++) {
      if (discount_obj[want[j]] > 0) {
        answer--;
        break;
      }
    }
  }
  return answer;
}

solution(
  ["banana", "apple", "rice", "pork", "pot"],
  [3, 2, 2, 2, 1],
  [
    "chicken",
    "apple",
    "apple",
    "banana",
    "rice",
    "apple",
    "pork",
    "banana",
    "pork",
    "rice",
    "pot",
    "banana",
    "apple",
    "banana",
  ]
);
solution(
  ["apple"],
  [10],
  [
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
    "banana",
  ]
);
