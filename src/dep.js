// Example of a transitive dep for index.js
const dep2fn = require('./dep2.js');

const hello = () => {
  dep2fn();
  console.log('Hello World!');
};

module.exports = hello;
