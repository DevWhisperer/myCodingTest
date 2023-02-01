function solution(nums) {
  let set = new Set(nums);
  let answer = Math.min(set.size, nums.length / 2);
  return answer;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
console.log(solution([3, 3, 3, 2, 2, 2]));
