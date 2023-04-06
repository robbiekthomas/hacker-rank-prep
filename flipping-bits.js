function flippingBits(n) {
  const bit = n.toString(2).split("");
  const nums = bit.map((str) => parseInt(str));

  for (let [idx, num] of nums.entries()) {
    if (num === 0) {
      nums[idx] = 1;
    }
    if (num === 1) {
      nums[idx] = 0;
    }
  }

  while (nums.length < 32) {
    nums.unshift(1);
  }

  const inverted = nums.join("");
  return parseInt(inverted, 2);
}

console.log(flippingBits(9));
