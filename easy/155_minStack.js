/**
 * 155. Min Stack
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(x) {
    if (!this.minStack.length || x <= this.getMin()) {
      this.minStack.push(x);
    }
    this.stack.push(x);
  }

  pop() {
    const pop = this.stack.pop();
    if (pop === this.getMin()) {
      this.minStack.pop();
    }
    return pop;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}