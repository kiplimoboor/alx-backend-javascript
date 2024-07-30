/* eslint-disable */
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

const spyCalculate = sinon.spy(Utils);

describe('sendPaymentRequestToApi', () => {
  it('checks if calculateNumber of Utils is called', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyCalculate.calculateNumber.calledWith('SUM', 10, 10)).to.be.true;
  });
});
