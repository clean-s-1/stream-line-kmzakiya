const sender = require('../sender/sender');
const {expect} = require('chai');

describe('#simulateSocInput', () => {
  it('should return array', () => {
    const soc = sender.simulateSocInput();
    expect(soc).to.instanceOf(Array);
  });
  it('should return an array of length 50', () => {
    const soc = sender.simulateSocInput();
    expect(soc.length).to.equal(50);
  });
});
describe('#simulateTemperatureInput', () => {
  it('should return array', () => {
    const temp = sender.simulateTemperatureInput();
    expect(temp).to.instanceOf(Array);
  });
  it('should return an array of length 50', () => {
    const temp = sender.simulateTemperatureInput();
    expect(temp.length).to.equal(50);
  });
});
