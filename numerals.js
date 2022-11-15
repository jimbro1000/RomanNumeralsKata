const symbols = new Map([
    [10, 'X'],
    [5, 'V'],
    [1, 'I'],
]);

function numerals(decimal) {
  let result = '';
  while (decimal > 0) {
    for(let pair of symbols) {
      if (pair[0] <= decimal) {
        result += pair[1];
        decimal -= pair[0];
        break;
      }
    }
  }
  return result;
}

module.exports = {
  numerals,
}