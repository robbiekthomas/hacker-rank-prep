function sockMerchant(n, arr) {
  let pairs = 0;
  const obj = {};
  arr.forEach((i) => {
    if (obj[i]) {
      pairs += 1;
      obj[i] = 0;
    } else {
      obj[i] = 1;
    }
  });
  return pairs;
}

console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
