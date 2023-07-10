function pipeFix(numbers){
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);
  const answer = [];
  for (let i = min; i <= max; i++) {
    answer.push(i);
  }
  return answer;
}
