function pickingNumbers(a) {
  let results = [];
  const sorted = a.sort((a, b) => a - b);
  for (let i = 0; i < a.length; i++) {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      if (sorted[j] - sorted[i] === 1 || sorted[j] - sorted[i] === 0) {
        count++;
      }
    }
    results.push(count);
  }

  return Math.max(...results);
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
