function plusMinus(arr) {
  let posCount = 0;
  let negCount = 0;
  let zerCount = 0;
  for (const num of arr) {
    if (num > 0) {
      posCount += 1;
    }
    if (num < 0) {
      negCount += 1;
    }
    if (num === 0) {
      zerCount += 1;
    }
  }
  let total = posCount + negCount + zerCount;

  console.log((posCount / total).toFixed(6));
  console.log((negCount / total).toFixed(6));
  console.log((zerCount / total).toFixed(6));
}

plusMinus([-4,3,-9,0,4,1]);