const { expect } = require('chai');
const request = require('request');

describe('test root api route', () => {
  it('correct response', () => {
    const res = request('http://127.0.0.1:7865/', (err, res, body) => {
      expect(res.statusCode === 200).to.be.true;
      expect(body).to.deep.equal('Welcome to the payment system');
    });
  });
});

describe('test /cart/ api route', () => {
  it('correct response', () => {
    const res = request('http://127.0.0.1:7865/cart/2', (err, res, body) => {
      expect(res.statusCode == 200).to.be.true;
      expect(body).to.deep.equal('Payment methods for cart 2');
    });

    const wrong = request('http://127.0.0.1:7865/cart/hello', (_, res, _) => {
      expect(res.statusCode == 404).to.be.true;
    });
  });
});
