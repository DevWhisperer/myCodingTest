function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      answer += " ";
      continue;
    }
    let curNum = s.charCodeAt(i);
    let newNum = s.charCodeAt(i) + n;
    if (65 <= curNum && curNum <= 90) {
      if (newNum > 90) {
        answer += String.fromCharCode(((newNum - 90) % 26) + 64);
      } else {
        answer += String.fromCharCode(newNum);
      }
    } else if (97 <= curNum && curNum <= 122) {
      if (newNum > 122) {
        answer += String.fromCharCode(((newNum - 122) % 26) + 96);
      } else {
        answer += String.fromCharCode(newNum);
      }
    }
  }
  return answer;
}

solution("AB", 1);
solution("z", 1);
solution("a B z", 4);
