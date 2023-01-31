function solution(begin, target, words) {
  const visited = { [begin]: 0 };
  const queue = [begin];
  console.log(visited);

  const isConnected = (str1, str2) => {
    let cnt = str1.length;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] == str2[i]) {
        cnt--;
      }
    }
    return cnt == 1 ? true : false;
  };

  while (queue.length) {
    const cur = queue.shift();
    if (cur === target) break;

    for (const word of words) {
      if (isConnected(cur, word) && !visited[word]) {
        queue.push(word);
        visited[word] = visited[cur] + 1;
      }
    }
  }
  return visited[target] ? visited[target] : 0;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
// solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]);
