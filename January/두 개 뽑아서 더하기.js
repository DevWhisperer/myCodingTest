function solution(numbers) {
  let set = new Set();
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  answer = [...set].sort((a, b) => a - b);
  console.log(answer);
}

solution([2, 1, 3, 4, 1]);
solution([5, 0, 2, 7]);
