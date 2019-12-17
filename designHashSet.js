/**
 * 705. Design HashSet
 * 
 * Design a HashSet without using any built-in hash table libraries. To be
 * specific, your design should include these functions:
 * add(value): Insert a value into the HashSet. 
 * contains(value) : Return whether the value exists in the HashSet or not.
 * remove(value): Remove a value in the HashSet. If the value does not exist
 * in the HashSet, do nothing.
 * 
 * Example:
 * const hashSet = new MyHashSet();
 * hashSet.add(1);
 * hashSet.add(2);
 * hashSet.contains(1);
 * hashSet.contains(3);
 * hashSet.add(2);
 * hashSet.contains(2);
 * hashSet.remove(2);
 * hashSet.contains(2);
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
