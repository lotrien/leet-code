/**
 * 707. Design Linked List
 */
class LinkedNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
  }

  _getNode(index) {
    if (index < 0) {
      return null;
    }
    let current = this.head;

    for (let i = 0; i < index; i++) {
      if (current) {
        current = current.next;
      }
    }

    return current;
  }

  get(index) {
    const node = this._getNode(index);
    return node ? node.val : -1;
  }

  addAtHead(val) {
    const node = new LinkedNode(val);
    node.next = this.head;
    this.head = node;
  }

  addAtTail(val) {
    if (!this.head) {
      this.addAtHead(val);
    } else {
      let current = this.head;

      while (current && current.next) {
        current = current.next;
      }

      current.next = new LinkedNode(val);
    }
  }

  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
    } else {
      const prev = this._getNode(index - 1);
      if (!prev) {
        return;
      }
      const current = new LinkedNode(val);
      const next = prev.next;
      current.next = next;
      prev.next = current;
    }
  }

  deleteAtIndex(index) {
    const current = this._getNode(index);
    if (!current) {
      return;
    }

    const prev = this._getNode(index - 1);
    const next = current.next;

    if (prev) {
      prev.next = next;
    } else {
      this.head = next;
    }
  }
}
