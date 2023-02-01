function solution(n, arr1, arr2) {
  let answer = [];
  for (let i = 0; i < n; i++) {
    bi_1 = arr1[i].toString(2);
    if (bi_1.length != n) {
      bi_1 = "0".repeat(n - bi_1.length) + bi_1;
    }

    bi_2 = arr2[i].toString(2);
    if (bi_2.length != n) {
      bi_2 = "0".repeat(n - bi_2.length) + bi_2;
    }
    let tmp = "";
    for (let j = 0; j < bi_1.length; j++) {
      if (Number(bi_1[j]) || Number(bi_2[j])) {
        tmp += "#";
      } else {
        tmp += " ";
      }
    }
    answer[i] = tmp;
  }
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
