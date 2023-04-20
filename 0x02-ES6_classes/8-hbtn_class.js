export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    // eslint-disable-next-line no-underscore-dangle
    return this._size;
  }

  set size(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._size = value;
  }

  get location() {
    // eslint-disable-next-line no-underscore-dangle
    return this._location;
  }

  set location(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._location = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this.size;
    }
    if (hint === 'string') {
      return this.location;
    }
    return this;
  }
}
