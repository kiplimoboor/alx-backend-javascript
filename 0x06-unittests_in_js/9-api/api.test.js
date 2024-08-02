const { expect } = require('chai');
const { response } = require('express');
const request = require('request');

const URL = 'http://localhost:7865';
describe('Index page', () => {
  it('returns correct response', (done) => {
    request.get(URL, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart page', () => {
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
