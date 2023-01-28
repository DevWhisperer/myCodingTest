function solution(arr) {
  let min_index;
  for (let i = 0; i < arr.length; i++) {
    if (min_index == undefined) {
      min_index = i;
    } else if (arr[min_index] > arr[i]) {
      min_index = i;
    }
  }
  arr.splice(min_index, 1);

  console.log(arr == []); //왜 false?
  if (arr == []) {
    return -1;
  }
  return arr;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
