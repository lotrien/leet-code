/**
 * 380. Insert Delete GetRandom O(1)
 */
class RandomizedSet {
  constructor() {
    this.dict = {};
    this.list = [];
  }

  insert(val) {
    if (val in this.dict) {
      return false;
    }
    this.dict[val] = this.list.length;
    this.list.push(val);
    return true;
  }

  remove(val) {
    if (!(val in this.dict)) {
      return false;
    }
    let end = this.list[this.list.length - 1];
    let original = this.dict[val];

    this.dict[end] = original;
    this.list[original] = end;

    this.list.pop();
    delete this.dict[val];
    return true;
  }

  getRandom() {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}
