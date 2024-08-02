const { expect } = require('chai');
const { response } = require('express');
const request = require('request');

const URL = 'http://localhost:7865';
describe('index page', () => {
  it('returns correct response', (done) => {
    request.get(URL, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('cart page', () => {
  it('returns correct response for valid id', (done) => {
    request.get(`${URL}/cart/693`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 693');
      done();
    });
  });

  it('returns a 4040 response for a negative id', (done) => {
    request.get(`${URL}/cart/-693`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });

  it('returns a 404 for a string id', (done) => {
    request.get(`${URL}/cart/str`, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});

describe('login page', () => {
  it('returns the correct response', (done) => {
    request.post(
      `${URL}/login`,
      { json: { userName: 'kiplimoboor' } },
      (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        expect(body).to.equal('Welcome kiplimoboor');
        done();
      }
    );
  });
});

describe('available payments', () => {
  it('returns correct available payments', (done) => {
    request.get(`${URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.include('payment_methods');
      done();
    });
  });
});
