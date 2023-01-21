function solution(n) {
  let batteryUseList = [0, 1];
  let batteryUse = (distance) => {
    if (!batteryUseList[distance]) {
      if (distance % 2 == 0) {
        batteryUseList[distance] = Math.min(
          batteryUse(distance / 2),
          batteryUse(distance - 1) + 1
        );
      } else {
        batteryUseList[distance] = batteryUse(distance - 1) + 1;
      }
    }
    return batteryUseList[distance];
  };

  return batteryUse(n);
}
//DP 와 메모이제이션으로 풀이. 런타임 에러

function solution(n) {
  let cur = n;
  let cnt = 0;
  while (cur > 0) {
    if (cur % 2 == 0) {
      cur /= 2;
    } else {
      cur -= 1;
      cnt++;
    }
  }
  return cnt;
}
// 어이없게 그리디로 쉽게 풀림
