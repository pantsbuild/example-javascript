function isEven(number) {
  if (number < 0) throw new Error('Number must be positive');
  if (typeof number !== 'number') throw new Error('Number must be a number');
  return number % 2 === 0;
}

function isOdd(number) {
  return !isEven(number);
}

module.exports = { isEven, isOdd };
