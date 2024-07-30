/* eslint-disable */
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Multiple Operations Test', () => {
  describe('SUM', () => {
    it('returns the correct sum of two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1, 2), 3);
    });
    it('rounds and returns sum of two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.2, 1), 2);
      assert.strictEqual(calculateNumber('SUM', 1.7, 1.2), 3);
      assert.strictEqual(calculateNumber('SUM', 1.7, 1.7), 4);
    });
  });

  describe('SUBTRACT', () => {
    it('returns the correct difference of two numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 1), 1);
    });
    it('rounds and returns sum of two numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 1), 0);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 1.2), 1);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.7, 1.7), 0);
    });
  });

  describe('DIVIDE', () => {
    it('returns the correct quotient of two numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });
    it('rounds and returns quotient of two numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 1), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 1.7, 1.2), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 1.7, 1.7), 1);
    });
    it('returns an error on zero division', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3, 0), 'Error');
    });
  });
});
