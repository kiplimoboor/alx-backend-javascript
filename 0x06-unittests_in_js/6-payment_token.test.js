const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve if arg is true', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect('data' in result).to.be.true;
    });
    done();
  });
});
