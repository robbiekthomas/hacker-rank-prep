function closestNumbers(arr) {
  // sort the array
  const sortedArr = arr.sort((a, b) => a - b);
  // find the max difference between each pair
  let minDif = Number.MAX_VALUE;
  const result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let curDif = Math.abs(sortedArr[i] - sortedArr[i + 1]);
    if (curDif < minDif) {
      minDif = curDif;
    }
  }
  // return all the pairs that have the same difference
  for (let i = 0; i < arr.length - 1; i++) {
    let curDif = Math.abs(sortedArr[i] - sortedArr[i + 1]);
    if (curDif === minDif) {
      result.push(sortedArr[i], sortedArr[i + 1]);
    }
  }
  return result;
}

console.log(closestNumbers([-5, 15, 25, 71, 63]));
