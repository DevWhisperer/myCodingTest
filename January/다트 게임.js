function solution(dartResult) {
  let cur = "";
  let a;
  let b;
  let stack = [];
  for (let i = 0; i < dartResult.length; i++) {
    cur = dartResult[i];
    switch (cur) {
      case "S":
        break;
      case "D":
        stack.push(stack.pop() ** 2);
        break;
      case "T":
        stack.push(stack.pop() ** 3);
        break;
      case "*":
        a = stack.pop() * 2;
        if (stack.length > 0) {
          b = stack.pop() * 2;
          stack.push(b);
        }
        stack.push(a);
        break;
      case "#":
        stack.push(stack.pop() * -1);
        break;
      default:
        if (isNaN(dartResult[i - 1])) {
          stack.push(Number(cur));
        } else {
          stack.push(Number(String(stack.pop()) + String(cur)));
        }
        break;
    }
    console.log(stack);
  }
  answer = stack.reduce((a, b) => a + b);
  return answer;
}
solution("1S*2T*3S");
