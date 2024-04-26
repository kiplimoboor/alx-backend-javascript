export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // set and get name
  set name(name) {
    this._name = name;
  }

  get name() {
    return this.name;
  }

  // set and get code
  set code(code) {
    this._code = code;
  }

  get code() {
    return this._code;
  }

  toString() {
    return this.code;
  }
}
