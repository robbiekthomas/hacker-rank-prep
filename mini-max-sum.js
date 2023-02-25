// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. 
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  const min = sortedArr.slice(0, 4).reduce((acc, val) => acc + val, 0);
  const max = sortedArr.slice(1, 5).reduce((acc, val) => acc + val, 0);

  console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]);
