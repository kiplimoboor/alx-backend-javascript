var assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('adds whole numbers', () => {
      assert.equal(calculateNumber('SUM', 1, 2), 3);
    });

    it('adds positive and negative numbers', () => {
      assert.equal(calculateNumber('SUM', -2.6, 5.6), 3);
    });

    it('rounds up a', () => {
      assert.equal(calculateNumber('SUM', 1.7, 2.4), 4);
    });

    it('rounds up b', () => {
      assert.equal(calculateNumber('SUM', 1, 2.7), 4);
    });

    it('rounds down both a and b', () => {
      assert.equal(calculateNumber('SUM', 1.2, 1.2), 2);
    });

    it('rounds up both a and b', () => {
      assert.equal(calculateNumber('SUM', 1.5, 2.6), 5);
    });
  });

  describe('SUBTRACT', () => {
    it('equal positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, 2.0), 0);
    });

    it('equal positive numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.3, 1.8), 0);
    });

    it('equal negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, -2.0), 0);
    });

    it('equal negative numbers (alternate)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.3, -1.8), 0);
    });

    it('negative and positive numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -2.0, 2.0), -4.0);
    });

    it('positive and negative numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.0, -2.0), 4.0);
    });

    it('0 and 0', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
    });
  });

  describe('DIVIDE', () => {
    it('divides whole numbers', () => {
      assert.equal(calculateNumber('DIVIDE', 2, 1), 2);
    });

    it('rounds up a', () => {
      assert.equal(calculateNumber('DIVIDE', 5.7, 2), 3);
    });

    it('rounds up b', () => {
      assert.equal(calculateNumber('DIVIDE', 6, 2.7), 2);
    });

    it('rounds down both a and b', () => {
      assert.equal(calculateNumber('DIVIDE', 6.2, 3.2), 2);
    });

    it('rounds up both a and b', () => {
      assert.equal(calculateNumber('DIVIDE', 4.7, 4.7), 1);
    });

    it('shows an error when b is 0', () => {
      assert.equal(calculateNumber('DIVIDE', 2.1, 0), 'Error');
    });
  });
});
