const { expect } = require('chai');
const sendPaymentToAPI = require('./5-payment');
const sinon = require('sinon');
const { beforeEach } = require('mocha');

describe('Test hooks', () => {
  const spyConsole = sinon.spy(console, 'log');
  beforeEach(() => {
    spyConsole.resetHistory();
  });

  afterEach(() => {
    expect(spyConsole.callCount).to.equal(1);
  });

  describe('first request', () => {
    it('sendPaymentRequestToAPI 1ith arguments 100 and 20', () => {
      sendPaymentToAPI(100, 20);
      expect(spyConsole.calledWith('The total is: 120')).to.be.true;
    });
  });

  describe('second request', () => {
    it('sendPaymentRequestToAPI 1ith arguments 10 and 10', () => {
      sendPaymentToAPI(10, 10);
      expect(spyConsole.calledWith('The total is: 20')).to.be.true;
    });
  });
});
