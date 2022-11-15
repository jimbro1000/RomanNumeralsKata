function numerals(decimal) {
  if (decimal === 5) return 'V';
  if (decimal === 10) return 'X';
  let result = "";
  for (let i=0; i<decimal; ++i) {
    result += "I";
  }
  return result;
}

module.exports = {
  numerals,
}