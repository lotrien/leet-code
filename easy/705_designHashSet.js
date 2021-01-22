/**
 * 705. Design HashSet
 */
class MyHashSet {
  constructor() {
    this.set = [];
    this.maxLength = 1000000;
  }

  _position(key, index) {
    const slot = this.set[index];

    if (slot === undefined) {
      return -1
    }

    return slot.indexOf(key);
  }

  add(key) {
    const position = this._position(key, key);

    if (position < 0) {
      if (this.set[key] === undefined) {
        this.set[key] = [];
      }
      this.set[key].push(key);
    }
  }

  remove(key) {
    const position = this._position(key, key);

    if (position > -1) {
      this.set[key].splice(position, 1);
    }
  }

  contains(key) {
    const position = this._position(key, key);
    return position > -1;
  }
}
