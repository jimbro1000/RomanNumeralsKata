/*
 * Significant units in roman numeral system
 * Must be ordered by largest value first
 */
const symbols = new Map([
    [10000, 'X̅'],
    [9000, 'MX̅'],
    [5000, 'V̅'],
    [4000, 'MV̅'],
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
]);

const DECIMAL = 0;
const ROMAN = 1;

function numerals(decimal) {
  let result = '';
  while (decimal > 0) {
    for(let pair of symbols) {
      if (pair[DECIMAL] <= decimal) {
        result += pair[ROMAN];
        decimal -= pair[DECIMAL];
        break;
      }
    }
  }
  return result;
}

module.exports = {
  numerals,
}