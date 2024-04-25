import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Set and get amount
  set amount(amount) {
    if (Number.isInteger(amount)) {
      this._amount = amount;
    }
  }

  get amount() {
    return this._amount;
  }

  // Set and get currency
  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  get currency() {
    return this._currency;
  }

  // method
  displayFullPrice() {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  // method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
