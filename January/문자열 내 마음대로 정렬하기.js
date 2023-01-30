function solution(strings, n) {
  strings.sort(function (a, b) {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    }
  });
}
solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"], 2);
