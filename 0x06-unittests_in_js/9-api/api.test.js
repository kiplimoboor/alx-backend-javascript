const { expect } = require('chai');
const { response } = require('express');
const request = require('request');

describe('Cart Page', () => {
  it('solves if path param is 10 (int)', () => {
    request('http://localhost:7865/cart/10', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('solves if path param is 10 (int)', () => {
    request('http://localhost:7865/cart/wrs', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });
});
