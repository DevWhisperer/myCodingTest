function solution(s) {
  let maximum;
  let minimum;
  let s_list = s.split(" ");

  const isSosu = (target) => {
    for (let i = 2; i <= target ** 0.5; i++) {
      if (target % i == 0) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < s_list.length; i++) {
    if (isSosu(s_list[i])) {
      maximum = maximum ? Math.max(maximum, s_list[i]) : s_list[i];
    } else {
      minimum = minimum ? Math.min(minimum, s_list[i]) : s_list[i];
    }
  }
  let answer = String(minimum) + " " + String(maximum);
  return answer;
}
let s = "97 75 88 99 95 92 73";

console.log(solution(s));
