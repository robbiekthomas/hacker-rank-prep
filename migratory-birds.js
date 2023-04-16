function migratoryBirds(arr) {
  // sort the array
  const sortedArr = arr.sort((a, b) => a - b);
  // chcek if next value in the array is the same as first

  let largestCountIdx = 0;
  let largestCount = 0;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1]) {
      count++;
    }
    if (sortedArr[i] !== sortedArr[i + 1]) {
      if (count > largestCount) {
        largestCountIdx = i;
        largestCount = count;
      }
      count = 0;
    }
  }
  return sortedArr[largestCountIdx];
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
