const { expect } = require('chai');
const { response } = require('express');
const request = require('request');

describe('Index page', () => {
  it('correct status code', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it('correct body', () => {
    request('http://localhost:7865', (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
    });
  });
});
