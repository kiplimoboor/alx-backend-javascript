const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log('The total amount is ' + sum);
}

module.exports = sendPaymentRequestToApi;
