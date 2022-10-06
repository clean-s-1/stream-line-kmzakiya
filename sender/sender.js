const inputGenerator = require('./input-generator');

function simulateTemperatureInput() {
  return inputGenerator.getRandomArray(0, 100, 50);
}

function simulateSocInput() {
  return inputGenerator.getRandomArray(0, 100, 50);
}

function printInputs() {
  console.log(simulateTemperatureInput());
  console.log(simulateSocInput());
}

module.exports = {
  simulateTemperatureInput,
  simulateSocInput,
  printInputs,
};
