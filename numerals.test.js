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
});