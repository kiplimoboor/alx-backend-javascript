/* eslint-disable */
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

const stubCalculate = sinon.stub(Utils, 'calculateNumber');
const spyConsole = sinon.spy(console, 'log');

stubCalculate.returns(10);

describe('sendPaymentRequestToApi', () => {
  sendPaymentRequestToApi(100, 20);
  it('checks if calculateNumber of Utils is called', () => {
    expect(stubCalculate.calledWith('SUM', 100, 20)).to.be.true;
    stubCalculate.restore();
  });

  it('checks if the stub logs a 10', () => {
    expect(spyConsole.calledWith('The total is: 10')).to.be.true;
    spyConsole.restore();
  });
});
