function solution(operations) {
  let queue = [];
  for (let char of operations) {
    let type = char[0];
    switch (type) {
      case "I":
        let num = char.substr(2);
        queue.push(num);
        break;

      case "D":
        let isMax = char.substr(2) == "1" ? true : false;
        queue.sort((a, b) => a - b);
        if (isMax) {
          queue.pop();
        } else {
          queue.shift();
        }
        break;
      default:
        break;
    }
  }
  if (queue.length == 0) {
    return [0, 0];
  } else {
    return [Math.max(...queue), Math.min(...queue)];
  }
}

solution(["I 16", "I -5643", "D -1", "D 1", "D 1", "I 123", "D -1"]);
solution([
  "I -45",
  "I 653",
  "D 1",
  "I -642",
  "I 45",
  "I 97",
  "D 1",
  "D -1",
  "I 333",
]);
