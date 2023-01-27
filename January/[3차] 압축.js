function solution(msg) {
  answer = [];
  //초기 사전 만들기
  let dict = [];
  for (let i = 65; i < 91; i++) {
    dict.push(String.fromCharCode(i));
  }

  while (msg != "") {
    for (let i = dict.length - 1; i >= 0; i--) {
      if (dict[i] == msg.substr(0, dict[i].length)) {
        dict.push(msg.substr(0, dict[i].length + 1));
        msg = msg.substr(dict[i].length);
        answer.push(i + 1);
        break;
      }
    }
  }
  return answer;
}

solution("KAKAO");
solution("TOBEORNOTTOBEORTOBEORNOT");
solution("ABABABABABABABAB");
