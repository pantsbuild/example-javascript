// Adding a separarate test file for demo purposes

const { isOdd } = require('./numbers.js');

describe('isOdd', () => {
  test('returns true if number is odd', () => {
    expect(isOdd(3)).toBe(true);
  });

  test('returns false if number is even', () => {
    expect(isOdd(2)).toBe(false);
  });
});
