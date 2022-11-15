function numerals(decimal) {
  let result = "";
  for (let i=0; i<decimal; ++i) {
    result += "I";
  }
  return result;
}

module.exports = {
  numerals,
}