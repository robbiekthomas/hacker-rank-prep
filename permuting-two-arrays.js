function twoArrays(k, A, B) {
  const ascA = A.sort((a, b) => a - b);
  const descB = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    let value = ascA[i] + descB[i];
    if (value < k) {
      return "NO";
    }
  }
  return "YES";
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]));
