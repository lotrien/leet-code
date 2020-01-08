/**
 * 146. LRU Cache
 */
class DLinkedNode {
  constructor(key = null, val = null) {
    this.val = val;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.cache = new Map();
    this.head = new DLinkedNode();
    this.tail = new DLinkedNode();

    this.head.next = this.tail;
    this.tail.next = this.head;
  }

  _removeNode(node) {
    const prevNode = node.prev;
    const newNode = node.next;

    prevNode.next = newNode;
    newNode.prev = prevNode;
  }

  _addNode(node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }

  _moveToHead(node) {
    this._removeNode(node);
    this._addNode(node);
  }

  _popTail() {
    const popped = this.tail.prev;

    this._removeNode(popped);

    return popped;
  }

  get(key) {
    const node = this.cache.get(key);

    if (!node) {
      return -1;
    }

    this._moveToHead(node);

    return node.val;
  }

  put(key, value) {
    const node = this.cache.get(key);

    if (!node) {
      const newNode = new DLinkedNode(key, value);

      this.cache.set(key, newNode);
      this._addNode(newNode);
      this.size += 1;

      if (this.size > this.capacity) {
        const tail = this._popTail();

        this.cache.delete(tail.key);
        this.size -= 1;
      }
    } else {
      node.val = value;
      this._moveToHead(node);
    }
  }
}
