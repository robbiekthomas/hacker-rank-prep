function pangrams(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (const char of alphabet) {
    if (!s.toLowerCase().includes(char) || s === " ") {
      return "not pangram";
    }
  }
  return "pangram";
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize'));