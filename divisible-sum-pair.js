function divisibleSumPairs(n, k, ar) {
  const answer = [];
  for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
          const sum = ar[i] + ar[j];
          if (sum % k === 0 ) {
              answer.push(sum);
          }
      }
  }
return answer.length;
}

console.log(divisibleSumPairs(6,3, [1,3,2,6,1,2]));