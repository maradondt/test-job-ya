export default class Cell {
  static createDead() {
    return new Cell(0);
  }

  static createLive() {
    return new Cell(1);
  }

  constructor(value) {
    this.value = value;
  }

  get() {
    return this.value;
  }

  toString() {
    return `${this.value}`;
  }

  // makeDead() {
  //   this.value = 0;
  //   return this;
  // }

  // makeAlive() {
  //   this.value = 1;
  //   return this;
  // }

  isAlive() {
    return this.value === 1;
  }

  isDead() {
    return this.value === 0;
  }
}
