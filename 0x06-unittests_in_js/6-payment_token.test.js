const { expect, should } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  describe('check if endpoint works', () => {
    it('should return details', (done) => {
      getPaymentTokenFromAPI(true).then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      });
    });
  });
});
