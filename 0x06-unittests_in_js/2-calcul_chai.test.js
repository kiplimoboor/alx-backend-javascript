const expect = require('chai').expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('adds whole numbers', () => {
      expect(calculateNumber('SUM', 1, 2)).equal(3);
    });

    it('adds positive and negative numbers', () => {
      expect(calculateNumber('SUM', -2.6, 5.6)).equal(3);
    });

    it('rounds up a', () => {
      expect(calculateNumber('SUM', 1.7, 2.4)).equal(4);
    });

    it('rounds up b', () => {
      expect(calculateNumber('SUM', 1, 2.7)).equal(4);
    });

    it('rounds down both a and b', () => {
      expect(calculateNumber('SUM', 1.2, 1.2)).equal(2);
    });

    it('rounds up both a and b', () => {
      expect(calculateNumber('SUM', 1.5, 2.6)).equal(5);
    });
  });

  describe('SUBTRACT', () => {
    it('subtracts whole numbers', () => {
      expect(calculateNumber('SUBTRACT', 2, 1)).to.equal(1);
    });

    it('rounds up a', () => {
      expect(calculateNumber('SUBTRACT', 2.7, 1.3)).to.equal(2);
    });

    it('rounds up b', () => {
      expect(calculateNumber('SUBTRACT', 4, 2.7)).to.equal(1);
    });

    it('subtracts positive and negative numbers', () => {
      expect(calculateNumber('SUBTRACT', -2.6, 5.6)).to.equal(-9);
    });

    it('rounds down both a and b', () => {
      expect(calculateNumber('SUBTRACT', 4.2, 1.2)).to.equal(3);
    });

    it('rounds up both a and b', () => {
      expect(calculateNumber('SUBTRACT', 4.7, 2.7)).to.equal(2);
    });
  });

  describe('DIVIDE', () => {
    it('divides whole numbers', () => {
      expect(calculateNumber('DIVIDE', 2, 1)).to.equal(2);
    });

    it('rounds up a', () => {
      expect(calculateNumber('DIVIDE', 5.7, 2)).to.equal(3);
    });

    it('rounds up b', () => {
      expect(calculateNumber('DIVIDE', 6, 2.7)).to.equal(2);
    });

    it('rounds down both a and b', () => {
      expect(calculateNumber('DIVIDE', 6.2, 3.2)).to.equal(2);
    });

    it('rounds up both a and b', () => {
      expect(calculateNumber('DIVIDE', 4.7, 4.7)).to.equal(1);
    });

    it('shows an error when b is 0', () => {
      expect(calculateNumber('DIVIDE', 2.1, 0)).to.equal('Error');
    });
  });
});
