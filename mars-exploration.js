function marsExploration(s) {
  const splitSignal = s.match(/.{1,3}/g);
  let errors = 0;
  for (const signal of splitSignal) {
      if (signal[0] !== 'S') {
          errors++;
      }
      if (signal[1] !== 'O') {
          errors++;
      }
      if (signal[2] !== 'S') {
          errors++;
      }
  }
  return errors;
}

console.log(marsExploration("SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS"));
