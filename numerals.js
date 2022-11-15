function numerals(decimal) {
  if (decimal === 5) return 'V';
  let result = "";
  for (let i=0; i<decimal; ++i) {
    result += "I";
  }
  return result;
}

module.exports = {
  numerals,
}