function rotateLeft(d, arr) {
  for (let i = 0; i < d; i++) {
    const first = arr.shift();
    arr.push(first);
  }
  return arr;
}

console.log(rotateLeft(2, [1, 2, 3, 4, 5]));
