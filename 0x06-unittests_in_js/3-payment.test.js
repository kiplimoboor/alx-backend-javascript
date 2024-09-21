const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateSpy;

  beforeEach(() => {
    calculateSpy = sinon.spy(Utils, 'calculateNumber');
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
    calculateSpy.restore();
  });

  it('uses the calculateNumber method of utils', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateSpy.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateSpy.callCount).to.be.equal(1);
    calculateSpy.restore();
  });

  it('prints the right message to console', () => {
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(190, 30);
    expect(consoleSpy.calledWith('The total amount is 120')).to.be.true;
    expect(consoleSpy.calledWith('The total amount is 220')).to.be.true;
  });
});
