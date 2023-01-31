function solution(new_id) {
  const regex = /^[|a-z|0-9|_|.|]+$/;
  // 1단계
  new_id = new_id.toLowerCase();

  // 2단계
  let tmp = "";
  for (let i = 0; i < new_id.length; i++) {
    if (new_id[i] == "-") {
      tmp += new_id[i];
      continue;
    }
    if (regex.test(new_id[i])) {
      tmp += new_id[i];
    }
  }
  new_id = tmp;
  // 3단계
  tmp = "";
  for (let i = 0; i < new_id.length; i++) {
    if (new_id[i] == "." && tmp[tmp.length - 1] == ".") {
      continue;
    } else {
      tmp += new_id[i];
    }
  }
  new_id = tmp;
  // 4단계
  if (new_id[new_id.length - 1] == ".") {
    new_id = new_id.substring(0, new_id.length - 1);
  }
  if (new_id[0] == ".") {
    new_id = new_id.substring(1);
  }
  // 5단계
  if (new_id == "") {
    new_id += "a";
  }
  // 6단계
  if (new_id.length >= 16) {
    new_id = new_id.substring(0, 15);
  }
  if (new_id[new_id.length - 1] == ".") {
    new_id = new_id.substring(0, new_id.length - 1);
  }
  // 7단계
  let rep = new_id[new_id.length - 1];
  while (new_id.length <= 2) {
    new_id += rep;
  }
  return new_id;
}
// solution("...!@BaT#*..y.abcdefghijklm");
solution("z-+.^.");
// solution("=.=");
// solution("123_.def");
// solution("abcdefghijklmn.p");
