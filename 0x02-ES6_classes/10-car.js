export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    // eslint-disable-next-line no-underscore-dangle
    return this._brand;
  }

  set brand(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = value;
  }

  get motor() {
    // eslint-disable-next-line no-underscore-dangle
    return this._motor;
  }

  set motor(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._motor = value;
  }

  get color() {
    // eslint-disable-next-line no-underscore-dangle
    return this._color;
  }

  set color(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
