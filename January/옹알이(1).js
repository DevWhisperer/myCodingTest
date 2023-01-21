//https://school.programmers.co.kr/learn/courses/30/lessons/120956

function solution(babbling) {
  let result = 0;
  const available = ["aya", "ye", "woo", "ma"];
  const checkAndCut = (target) => {
    for (let availItem of available) {
      if (target.substr(0, availItem.length) == availItem) {
        return target.substr(availItem.length);
      }
    }
    return -1;
  };

  for (let babble of babbling) {
    while (true) {
      babble = checkAndCut(babble);
      if (babble == -1) {
        break;
      }
      if (babble == "") {
        result++;
        break;
      }
    }
  }

  return result;
}

//핵심: while,for,if 잘 다루기
