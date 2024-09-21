const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve if arg is true', (done) => {
    getPaymentTokenFromAPI(true).then((result) => {
      expect(typeof result == 'object').to.be.true;
    });
    done();
  });
});
