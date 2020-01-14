/**
 * 622. Design Circular Queue
 */
class MyCircularQueue {
  constructor(k) {
    this.size = k;
    this.queue = [];
    this.head = -1;
    this.tail = -1;
  }

  enQueue(value) {
    if (this.isFull()) {
      return false;
    }

    if (this.isEmpty()) {
      this.head = 0;
    }

    this.tail = (this.tail + 1) % this.size;
    this.queue[this.tail] = value;

    return true;
  }

  deQueue() {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head === this.tail) {
      this.head = -1;
      this.tail = -1;
      return true;
    }

    this.head = (this.head + 1) % this.size;

    return true;
  }

  Front() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.head];
  }

  Rear() {
    if (this.isEmpty()) {
      return -1;
    }

    return this.queue[this.tail];
  }

  isEmpty() {
    return this.head === -1;
  }

  isFull() {
    return (this.tail + 1) % this.size === this.head;
  }
}
