function countingSort(arr) {
  const result = Array(100).fill(0);
  for (let num of arr) {
    result[num]++;
  }
  return result;
}

console.log(countingSort([1, 2, 3, 2, 1]));
