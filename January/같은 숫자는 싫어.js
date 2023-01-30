function solution(arr) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      continue;
    } else {
      answer.push(arr[i]);
    }
  }
}
solution([1, 1, 3, 3, 0, 1, 1]);
solution([4, 4, 4, 3, 3]);
