/* eslint-disable */
const assert = require('assert');
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('Multiple Operations Test', () => {
  describe('SUM', () => {
    it('returns the correct sum of two numbers', () => {
      expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
    it('rounds and returns sum of two numbers', () => {
      expect(calculateNumber('SUM', 1.2, 1)).to.equal(2);
      expect(calculateNumber('SUM', 1.7, 1.2)).to.equal(3);
      expect(calculateNumber('SUM', 1.7, 1.7)).to.equal(4);
    });
  });

  describe('SUBTRACT', () => {
    it('returns the correct difference of two numbers', () => {
      expect(calculateNumber('SUBTRACT', 2, 1), 1);
    });
    it('rounds and returns sum of two numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.2, 1)).to.equal(0);
      expect(calculateNumber('SUBTRACT', 1.7, 1.2)).to.equal(1);
      expect(calculateNumber('SUBTRACT', 1.7, 1.7)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('returns the correct quotient of two numbers', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });
    it('rounds and returns quotient of two numbers', () => {
      expect(calculateNumber('DIVIDE', 1.2, 1)).to.equal(1);
      expect(calculateNumber('DIVIDE', 1.7, 1.2)).to.equal(2);
      expect(calculateNumber('DIVIDE', 1.7, 1.7)).to.equal(1);
    });
    it('returns an error on zero division', () => {
      expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
    });
  });
});
