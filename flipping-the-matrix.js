function flippingMatrix(matrix) {
  const n = matrix.length / 2;
  let max = 0;
  let result = 0;
  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      max = Number.MIN_VALUE;
      max = Math.max(matrix[i][j], max);
      max = Math.max(matrix[i][2 * n - j - 1], max);
      max = Math.max(matrix[2 * n - i - 1][j], max);
      max = Math.max(matrix[2 * n - i - 1][2 * n - j - 1], max);

      result += max;
    }
  }
  return result;
}

console.log(
  flippingMatrix([
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108],
  ])
);
