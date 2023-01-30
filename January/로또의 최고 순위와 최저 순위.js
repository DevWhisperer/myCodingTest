function solution(lottos, win_nums) {
  // 번호 오름차순 정렬
  lottos.sort((a, b) => a - b);
  win_nums.sort((a, b) => a - b);

  // 0의 갯수 파악
  let zero_cnt = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] == 0) {
      zero_cnt++;
      continue;
    } else {
      break;
    }
  }
  // 0 제거
  lottos.splice(0, zero_cnt);

  // 당첨 비교
  let winCnt = 0;
  let lottos_pop = lottos.pop();
  let win_nums_pop = win_nums.pop();

  while (lottos_pop != undefined && win_nums_pop != undefined) {
    if (lottos_pop < win_nums_pop) {
      win_nums_pop = win_nums.pop();
      continue;
    } else if (lottos_pop > win_nums_pop) {
      lottos_pop = lottos.pop();
      continue;
    } else {
      winCnt++;
      win_nums_pop = win_nums.pop();
      lottos_pop = lottos.pop();
      continue;
    }
  }
  // 순위 매기기
  let minRank = Math.min(7 - winCnt, 6);
  let maxRank = Math.min(7 - winCnt - zero_cnt, 6);
  return [maxRank, minRank];
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
