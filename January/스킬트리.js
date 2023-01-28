function solution(skill, skill_trees) {
  answer = 0;
  for (let tree of skill_trees) {
    let check_skill = "";
    for (let char of tree) {
      if (skill.includes(char)) {
        check_skill += char;
      }
    }
    if (skill.substr(0, check_skill.length) == check_skill) {
      answer++;
    }
  }
  return answer;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);
