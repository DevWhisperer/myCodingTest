function solution(numbers, hand) {
  answer = "";
  left_cur = 10;
  right_cur = 12;
  numbers.map((target) => {
    if (target == 0) {
      target = 11;
    }
    if (target % 3 == 1) {
      left_cur = target;
      answer += "L";
    } else if (target % 3 == 0) {
      right_cur = target;
      answer += "R";
    } else {
      let left_dist = 0;
      let right_dist = 0;
      if (left_cur % 3 == 1) {
        left_dist++;
      }
      if (right_cur % 3 == 0) {
        right_dist++;
      }
      left_dist += Math.abs(Math.ceil(left_cur / 3) - Math.ceil(target / 3));
      right_dist += Math.abs(Math.ceil(right_cur / 3) - Math.ceil(target / 3));
      if (left_dist < right_dist) {
        left_cur = target;
        answer += "L";
      } else if (left_dist > right_dist) {
        right_cur = target;
        answer += "R";
      } else {
        if (hand == "left") {
          left_cur = target;
          answer += "L";
        } else {
          right_cur = target;
          answer += "R";
        }
      }
    }
  });
  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]));
// console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]));
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
