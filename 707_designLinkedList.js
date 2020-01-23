/**
 * 707. Design Linked List
 */
// Singly Linked List
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

// Doubly Linked List
function DoublyListNode(val) {
  this.val = val;
  this.next = this.prev = null;
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

  _getTail() {
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current;
  }

  get(index) {
    const node = this._getNode(index);
    return node ? node.val : -1;
  }

  addAtHead(val) {
    const node = new DoublyListNode(val);
    node.next = this.head;

    if (this.head) {
      this.head.prev = node;
    }

    this.head = node;
  }

  addAtTail(val) {
    if (!this.head) {
      this.addAtHead(val);
    } else {
      const prev = this._getTail();
      const node = new DoublyListNode(val);
      prev.next = node;
      node.prev = prev;
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
      const current = new DoublyListNode(val);
      const next = prev.next;

      current.prev = prev;
      current.next = next;
      prev.next = current;

      if (next) {
        next.prev = current;
      }
    }
  }

  deleteAtIndex(index) {
    const current = this._getNode(index);
    if (!current) {
      return;
    }

    const prev = current.prev;
    const next = current.next;

    if (prev) {
      prev.next = next;
    } else {
      this.head = next;
    }

    if (next) {
      next.prev = prev;
    }
  }
}
