function processData(input) {
  const inputsArray = input.split('\r\n');

  for (const inputLine of inputsArray) {
      const ele = inputLine.split(';');
      const chars = ele[2].split('');

      for (let [index, char] of chars.entries()) {
          if (ele[0] === 'S') {
              if (char === char.toUpperCase()) {
                  chars[index] = ' ' + char.toLowerCase();
              }
          }

          if (ele[0] === 'C') {
              if (char === ' ') {
                  chars.splice(index, 1)
                  chars[index] = chars[index].toUpperCase();
              }
          }
          
      }
      if (ele[0] === 'C' && ele[1] === 'M') {
              chars.push('()');
          }
      if (ele[0] === 'C' && ele[1] === 'C') {
              chars[0] = chars[0].toUpperCase();
          }
      if (ele[0] === 'S' && ele[1] === 'M') {
              chars.pop();
              chars.pop();
          }
      console.log(chars.join('').trim());

  }
}

processData(`S;V;iPad\r\nC;M;mouse pad\r\nC;C;code swarm\r\nS;C;OrangeHighlighter\r\n`);
