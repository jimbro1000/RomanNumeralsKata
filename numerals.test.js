const numerals = require('./numerals.js').numerals;

describe('roman numerals converter', () => {
  it.each([
      [1,'I'],
      [2,'II'],
      [3,'III'],
  ])('tallies 1s into Is', (decimal, expected) => {
    expect(numerals(decimal)).toEqual(expected);
  });
});