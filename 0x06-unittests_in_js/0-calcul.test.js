const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('sum of 2.5 and 1.2 is 4', () => {
    assert.equal(calculateNumber(2.5, 1.2), 4);
  });

  it('sum of 0.9 and 0.9 is 2', () => {
    assert.equal(calculateNumber(0.9, 0.9), 3);
  });
});
