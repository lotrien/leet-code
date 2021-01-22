/**
 * 379. Design Phone Directory
 */
class LinkedNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class PhoneDirectory {
  constructor(maxNumbers) {
    this.maxNumbers = maxNumbers;
    this.list = null;
    this._constructList();
  }

  _constructList() {
    let i = this.maxNumbers - 1;

    while (i >= 0) {
      if (!this.list) {
        this.list = new LinkedNode(i);
      } else {
        this._addNode(i);
      }

      i--;
    }
  }

  _addNode(val) {
    const node = new LinkedNode(val);
    node.next = this.list;
    this.list = node;
  }

  get() {
    if (!this.list) {
      return -1;
    }

    const node = this.list;

    this.list = this.list.next;

    return node.val;
  }

  check(number) {
    let current = this.list;
    while (current) {
      if (current.val === number) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  release(number) {
    if (!this.check(number)) {
      this._addNode(number);
    }
  }
}
