const inputGenerator = require('../sender/input-generator');
const {expect} = require('chai');

describe('#getRandomNumber', () => {
  it('should return a value greater than min', () => {
    const min = 10;
    const max = 100;
    const random = inputGenerator.getRandomNumber(min, max);
    expect(random).to.greaterThanOrEqual(min);
  });
  it('should return a value less than max', () => {
    const min = 10;
    const max = 100;
    const random = inputGenerator.getRandomNumber(min, max);
    expect(random).to.lessThanOrEqual(max);
  });
});

describe('#getRandomArray', () => {
  it('should return an array of length', () => {
    const count = 50;
    const random = inputGenerator.getRandomArray(0, 100, count);
    expect(random.length).to.equal(count);
  });
});
