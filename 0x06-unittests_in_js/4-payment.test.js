const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;
  let calculateStub;

  beforeEach(() => {
    calculateStub = sinon.stub(Utils, 'calculateNumber').callsFake(() => 10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
    calculateStub.restore();
  });

  it('uses the calculateNumber method of utils', () => {
    sendPaymentRequestToApi(100, 20);
    expect(calculateStub.calledWith('SUM', 100, 20)).to.be.true;
  });

  it('prints the right message to console', () => {
    sendPaymentRequestToApi(190, 30);
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
  });
});
