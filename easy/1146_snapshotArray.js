/**
 * 1146. Snapshot Array
 */
class SnapshotArray {
  constructor(length) {
    this.snapId = 0;
    this.hashMap = new Map();
  }

  set(index, val) {
    const current = `${this.snapId}/${index}`;
    this.hashMap.set(current, val);
  }

  snap() {
    return this.snapId++;
  }

  get(index, snapId) {
    while (snapId >= 0) {
      const current = `${snapId}/${index}`;
      if (this.hashMap.has(current)) {
        return this.hashMap.get(current);
      }

      snapId--;
    }
    return 0;
  }
}
