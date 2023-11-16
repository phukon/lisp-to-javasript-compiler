const LETTERS = /[a-z]/i;
module.exports = function tokenizer(input) {
  const tokens = [];
  let current = 0;
  while (current < input.length) {
    let char = input[current];
    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '(',
      });
      current++;
      continue;
    }
    if (LETTERS.test(char)) {
      let value = '';
      while (LETTERS.test(char)) {
        value += char;
        char = input[++current];
      }
    }
    throw new TypeError(`Unknown char: '${char}'`);
  }
  return tokens;
};
