function solution(s) {
  let cur = s;
  let answer = 0;
  const turn = (target) => {
    return target.slice(1) + target[0];
  };
  const isAlright = (target) => {
    let stack = [];
    for (let i = 0; i < target.length; i++) {
      if (target[i] == "{" || target[i] == "[" || target[i] == "(") {
        stack.push(target[i]);
      } else if (target[i] == "}") {
        if (stack.pop() != "{") {
          return false;
        }
      } else if (target[i] == ")") {
        if (stack.pop() != "(") {
          return false;
        }
      } else if (target[i] == "]") {
        if (stack.pop() != "[") {
          return false;
        }
      }
    }
    if (stack.length != 0) {
      return false;
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (isAlright(cur)) {
      answer++;
    }
    cur = turn(cur);
  }
  return answer;
}

//오답 원인. 문제 상황에 사각지대가 있었다(선입견과 사각지대). stack 사용.
