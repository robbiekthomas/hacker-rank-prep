function matchingStrings(strings, queries) {
  const arrResult = [];

  for (const query of queries) {
      const matchingStrings = strings.filter(string => string === query);
      arrResult.push(matchingStrings.length);
  }
  return arrResult;
}

console.log(matchingStrings(['ab','ab','abc'], ['ab','abc','bc']));