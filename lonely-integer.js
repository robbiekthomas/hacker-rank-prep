function lonelyinteger(a) {
  const sortedArray = a.sort((a, b) => a - b);
  for (let i = 0; i < a.length; i += 2) {
    if (sortedArray[i] !== sortedArray[i + 1]) {
      return sortedArray[i];
    }
  }
}

console.log(lonelyinteger([1, 2, 3, 2, 1]));
