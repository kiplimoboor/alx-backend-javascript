/* eslint-disable */

export default class Building {
  constructor(sqft) {
    if (
      this.constructor !== Building &&
      this.evacuationWarningMessage === undefined
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage'
      );
    }

    if (typeof sqft !== 'number') {
      throw new Error('sqft must be a number');
    }
    this._sqft = sqft;
  }

  // Get sqft
  get sqft() {
    return this.sqft;
  }
}
