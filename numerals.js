const symbols = new Map([
    [1000, 'M'],
    [500, 'D'],
    [100, 'C'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
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