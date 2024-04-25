export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // set and get code
  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  get code() {
    return this._code;
  }

  // set and get name
  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
