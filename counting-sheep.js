function countSheeps(arrayOfSheep) {
  let count = 0;
  for (const bool of arrayOfSheep) {
    if (bool === true) {
      count++
    }
  }
  return count;
}
