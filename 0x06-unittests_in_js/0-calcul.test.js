const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('calculates whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('rounds down b', () => {
    assert.strictEqual(calculateNumber(1, 2.4), 3);
  });

  it('rounds down a and b', () => {
    assert.strictEqual(calculateNumber(1.4, 2.4), 3);
  });

  it('rounds down a', () => {
    assert.strictEqual(calculateNumber(1.4, 2.0), 3);
  });

  it('rounds up b', () => {
    assert.strictEqual(calculateNumber(1.0, 2.5), 4);
  });

  it('rounds up both a and b', () => {
    assert.strictEqual(calculateNumber(2.6, 2.5), 6);
  });

  it('rounds up a', () => {
    assert.strictEqual(calculateNumber(2.6, 2.0), 5);
  });
});
