/**
 * 716. Max Stack
 * 
 * Design a max stack that supports push, pop, top, peekMax and popMax.
 * push(x) -- Push element x onto stack.
 * pop() -- Remove the element on top of the stack and return it.
 * top() -- Get the element on the top.
 * peekMax() -- Retrieve the maximum element in the stack.
 * popMax() -- Retrieve the maximum element in the stack, and remove it. If you
 * find more than one maximum elements, only remove the top-most one.
 * 
 * Example:
 * const stack = new MaxStack();
 * stack.push(5); 
 * stack.push(1);
 * stack.push(5);
 * stack.top(); -> 5
 * stack.popMax(); -> 5
 * stack.top(); -> 1
 * stack.peekMax(); -> 5
 * stack.pop(); -> 1
 * stack.top(); -> 5
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
