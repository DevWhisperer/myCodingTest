function solution(n) {
  let dp = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n];
}

// 먼저 든 생각은 combination이었으나, dp로 매우 쉽게 해결. 쉽지 않은거 같다면 자료구조가 다른 유형이 아닐까 점검해보자
