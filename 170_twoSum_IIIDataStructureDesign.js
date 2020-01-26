/**
 * 170. Two Sum III - Data structure design
 */
class TwoSum {
  constructor() {
    this.map = new Map();
  }

  add(value) {
    if (this.map.has(value)) {
      this.map.set(value, this.map.get(value) + 1);
    } else {
      this.map.set(value, 1);
    }
  }

  find(value) {
    for (let [key] of this.map) {
      const p = value - key;

      if (this.map.get(p) || this.map.get(p) === 0) {
        if (key !== p || this.map.get(p) > 1) {
          return true;
        }
      }
    }
    return false;
  }
}
