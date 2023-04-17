function maximumPerimeterTriangle(sticks) {
  // check every stick with every other two sticks the three conditions
  const success = [];
  for (let i = 0; i < sticks.length - 2; i++) {
      for (let j = i + 1; j < sticks.length - 1; j++) {
          for (let k = j + 1; k < sticks.length; k++) {
              if (sticks[i] + sticks[j] > sticks[k] &&
                  sticks[j] + sticks[k] > sticks[i] &&
                  sticks[i] + sticks[k] > sticks[j]) {
                  // group the three sticks into a success array
                  success.push([sticks[i], sticks[j], sticks[k]]);
              }
          }
      }
  }

  // sum the arrays and compare with the other results to return the longest
  if (success.length === 0) {
      return [-1]
  }
  let longest = 0;
  let result;
  for (const [idx, answer] of success.entries()) {
      const sum = answer.reduce((a, b) => a + b, 0)
      if (sum > longest) {
          longest = sum
          result = answer;
      }
  }
  return result.sort((a,b) => a - b);
}

console.log(maximumPerimeterTriangle([3, 9, 2, 15, 3]));