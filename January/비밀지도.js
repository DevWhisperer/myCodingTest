function solution(n, arr1, arr2) {
  let Arr1 = arr1.map((x) => x.toString(2));
  let Arr2 = arr2.map((x) => x.toString(2));
  //   console.log(Arr1, Arr2);
  let answer = "";
  for (i = 0; i < Arr1.length; i++) {
    Arr1[i] = [...Arr1[i]];
    Arr2[i] = [...Arr2[i]];
    if (Arr1[i].length !== n) {
      let plusArr = Array(n - Arr1[i].length).fill("0");
      Array.prototype.push.apply(plusArr, Arr1[i]);
      Arr1[i] = plusArr;
    } else Arr1[i];
    if (Arr2[i].length !== n) {
      let plusArr2 = Array(n - Arr2[i].length).fill("0");
      Array.prototype.push.apply(plusArr2, Arr2[i]);
      Arr2[i] = plusArr2;
    } else Arr2[i];
    Arr1[i] = Arr1[i].join("");
    Arr2[i] = Arr2[i].join("");

    let tmp = "";
    for (j = 0; j < n; j++) {
      if (Arr1[i][j] === "0" && Arr2[i][j] === "0") {
        tmp += " ";
      } else tmp += "#";
    }
    Arr1[i] = tmp;
  }
  console.log(Arr1);
  return Arr1;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
// solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
