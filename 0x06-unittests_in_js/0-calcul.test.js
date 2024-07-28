const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('add integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('first number rounded', () => {
    assert.strictEqual(calculateNumber(1.7, 2), 4);
  });

  it('second number rounded', () => {
    assert.strictEqual(calculateNumber(1, 2.8), 4);
  });

  it('round both numbers', () => {
    assert.strictEqual(calculateNumber(1.5, 2.6), 5);
  });
});
