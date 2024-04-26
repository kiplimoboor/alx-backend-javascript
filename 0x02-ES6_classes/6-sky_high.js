import Building from './5-building';

export default class SkyBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  // set and get floors
  set floors(floors) {
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  // method override
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
