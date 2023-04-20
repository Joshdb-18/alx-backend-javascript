import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  get range() {
    // eslint-disable-next-line no-underscore-dangle
    return this._range;
  }

  set range(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._range = value;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
