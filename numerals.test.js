const numerals = require('./numerals.js').numerals;

describe('roman numerals converter', () => {
  it.each([
      [1,'I'],
      [2,'II'],
      [3,'III'],
  ])('tallies 1s into Is', (decimal, expected) => {
    expect(numerals(decimal)).toEqual(expected);
  });
  it('converts 5 into V', () => {
    expect(numerals(5)).toEqual('V');
  });
  it('converts 10 into X', () => {
    expect(numerals(10)).toEqual('X');
  });
  it('converts 50 into L', () => {
    expect(numerals(50)).toEqual('L');
  });
  it('converts 100 into C', () => {
    expect(numerals(100)).toEqual('C');
  });
  it('converts 500 into D', () => {
    expect(numerals(500)).toEqual('D');
  });
  it('converts 1000 into M', () => {
    expect(numerals(1000)).toEqual('M');
  });
  it.each([
      [6, 'VI'],
      [7, 'VII'],
      [12, 'XII'],
      [16, 'XVI'],
  ])('combines symbols by adding smaller values to the right', (decimal, expected) => {
    expect(numerals(decimal)).toEqual(expected);
  });
  it.each([
      [4, 'IV'],
      [9, 'IX'],
  ])('subtracts 1 from V or X symbol if it is to the left', (decimal, expected) => {
    expect(numerals(decimal)).toEqual(expected);
  });
  it.each([
      [40, 'XL'],
      [90, 'XC'],
  ])('subtracts 10 from L or C symbol if it is to the left', (decimal, expected) => {
    expect(numerals(decimal)).toEqual(expected);
  });
  it.each([
    [400, 'CD'],
    [900, 'CM'],
  ])('subtracts 100 from D or M symbol if it is to the left', (decimal, expected) => {
    expect(numerals(decimal)).toEqual(expected);
  });
});