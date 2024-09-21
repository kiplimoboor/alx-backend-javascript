const { expect } = require('chai');
const request = require('request');

describe('test root api route', () => {
  it('correct status code', () => {
    const res = request('http://127.0.0.1:7865/', (err, res, body) => {
      expect(res.statusCode === 200).to.be.true;
      expect(body).to.deep.equal('Welcome to the payment system');
    });
  });
});
