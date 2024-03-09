const hello = require('./dep.js');
const { isEven } = require('./numbers.js');

if (isEven(4)) {
  hello();
}
