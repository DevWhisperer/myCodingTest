//https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let i = 0;
  let ham = 0;
  while (i < ingredient.length) {
    if (ingredient[i] == 1) {
      if (ingredient[i + 1] == 2) {
        if (ingredient[i + 2] == 3) {
          if (ingredient[i + 3] == 1) {
            ham++;
            ingredient.splice(i, 4);
            i = i - 3;
            continue;
          }
        }
      }
    }
    i++;
  }
  return ham;
}

//인덱스를 while가지고 조절
