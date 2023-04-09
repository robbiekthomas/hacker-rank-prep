function countingValleys(steps, path) {
  let altitude = 0;
  let valleys = 0;
  for (const step of path) {
    if (step === "D" && altitude === 0) {
      valleys++;
    }
    if (step === "U") {
      altitude++;
    }
    if (step === "D") {
      altitude--;
    }
  }
  return valleys;
}

console.log(countingValleys(8, "UDDDUDUU"));
