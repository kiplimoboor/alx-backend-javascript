var assert = require('assert');
var calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  describe('none rounded', () => {
    it('return sum of 1 and 2 = 3', () => {
      assert.strictEqual(calculateNumber(1, 2), 3);
    });
  });

  describe('first rounded', () => {
    it('rounds down 1.2 and adds it to 2 = 3', () => {
      assert.strictEqual(calculateNumber(1.2, 2), 3);
    });
    it('rounds up 1.6 and adds it to 2 = 4', () => {
      assert.strictEqual(calculateNumber(1.6, 2), 4);
    });
  });

  describe('second rounded', () => {
    it('rounds down 2.2 and adds it to 1 = 3', () => {
      assert.strictEqual(calculateNumber(1, 2.2), 3);
    });
    it('rounds up 2.6 and adds it to 1 = 4', () => {
      assert.strictEqual(calculateNumber(1, 2.6), 4);
    });
  });

  describe('both rounded', () => {
    it('rounds up 1.6 and rounds down 1.4 = 3', () => {
      assert.strictEqual(calculateNumber(1.6, 1.4), 3);
    });
    it('rounds up 1.7 and rounds up 4.7 = 7', () => {
      assert.strictEqual(calculateNumber(1.7, 4.7), 7);
    });
  });
});
