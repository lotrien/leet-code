/**
 * 716. Max Stack
 */
class MaxStack {
  constructor() {
    this.stack = [];
    this.maxStack = [];
  }

  _getMax() {
    return this.maxStack[this.maxStack.length - 1];
  }

  push(number) {
    if (!this.maxStack.length || number >= this._getMax()) {
      this.maxStack.push(number);
    }
    this.stack.push(number);
  }

  pop() {
    if (!this.stack.length) return;

    const top = this.stack.pop();
    if (top === this._getMax()) {
      this.maxStack.pop();
    }

    return top;
  }

  top() {
    if (!this.stack.length) return;

    return this.stack[this.stack.length - 1];
  }

  peekMax() {
    if (!this.maxStack.length) return;
    return this.maxStack[this.maxStack.length - 1];
  }

  popMax() {
    const max = this.maxStack.pop();
    const temp = [];

    for (var i = this.stack.length - 1; i >= 0; i--){
      if (this.stack[i] === max) {
        this.stack.splice(i, 1);
        break;
      } else {
        temp.push(this.stack.pop());
      }
    }

    while(temp.length) {
      this.push(temp.pop());
    }

    return max;
  }
}
