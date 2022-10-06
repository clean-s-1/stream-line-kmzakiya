function getRandomArray(min = 0, max = 100, count = 50) {
  const input = [];
  let n = 0;
  while (n < count) {
    n++;
    input.push(getRandomNumber(min, max));
  }
  return input;
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  getRandomArray,
  getRandomNumber,
};
