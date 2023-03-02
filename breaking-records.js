function breakingRecords(scores) {
  let minCount = 0;
  let maxCount = 0;
  let min = scores[0];
  let max = scores[0];
  for (const score of scores) {
      console.log(min);
      if (score < min) {
          minCount += 1;
          min = score;
      }
      if (score > max) {
          maxCount += 1;
          max = score;
      }
  }
return [maxCount, minCount];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));