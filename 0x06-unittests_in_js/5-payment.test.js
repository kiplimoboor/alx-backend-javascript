const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment');
const { expect } = require('chai');

describe('sendPaymentRequest', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('logs 120 to console when called with 100 and 20', () => {
    sendPaymentRequestToAPI(100, 20);
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('logs 120 to console when called with 100and 10', () => {
    sendPaymentRequestToAPI(10, 10);
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
