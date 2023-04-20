function getTotalX(a, b) {
  // find values that divide by elements in a that are less than the smallest value of b
  let aResult = [];
  for (let i = 1; i <= b[0]; i++) {
    let fail = 0;
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        fail++;
      }
    }
    if (fail === 0) {
      aResult.push(i);
    }
  }

  // check which numbers divide evenly into array b
  let result = 0;
  for (let numA of aResult) {
    let count = 0;
    for (const numB of b) {
      if (numB % numA === 0) {
        count++;
      }
    }
    if (count === b.length) {
      result++;
    }
  }
  // return the number that are a factor of both scenarios
  return result;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
