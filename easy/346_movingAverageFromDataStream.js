/**
 * 346. Moving Average from Data Stream
 */
// not optimal due to .shift() usage
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
  }

  _getAverage() {
    const sum = this.queue.reduce((acc, val) => acc + val, 0);
    return sum / this.queue.length;
  }

  next(val) {
    if (this.queue.length === this.size) {
      this.queue.shift();
    }

    this.queue.push(val);

    return this._getAverage();
  }
}

// not optimal by memory usage
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.sum = 0;
  }

  _getAverage() {
    return this.sum / (this.tail - this.head);
  }

  next(val) {
    debugger;
    if (this.tail - this.head === this.size) {
      this.sum -= this.queue[this.head];
      this.head += 1;
    }

    this.queue.push(val);
    this.sum += this.queue[this.tail];
    this.tail += 1;

    return this._getAverage();
  }
}

// optimal due to circular queue usage
class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.head = 0;
    this.sum = 0;
    this.count = 0;
  }

  _getAverage() {
    return this.sum / Math.min(this.size, this.count);
  }

  next(val) {
    this.count += 1;
    const tail = (this.head + 1) % this.size;
    this.sum = this.sum - (this.queue[tail] || 0) + val;

    this.head = (this.head + 1) % this.size;
    this.queue[this.head] = val;

    return this._getAverage();
  }
}