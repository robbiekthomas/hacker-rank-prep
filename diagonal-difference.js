function diagonalDifference(arr) {
  const length = arr.length;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < length; i++) {
    leftSum += arr[i][i];
    rightSum += arr[i][length - 1 - i];
  }
  return Math.abs(leftSum - rightSum);
}

console.log(diagonalDifference([
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
]));
