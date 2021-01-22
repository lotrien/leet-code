/**
 * 173. Binary Search Tree Iterator
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// requires space memory of O(n) to store full tree traverse
class BSTIterator {
  constructor(root) {
    this.output = [];
    this.count = 0;

    this._traverse(root, this.output)
  }

  _traverse(node, output) {
    if (node) {
      this._traverse(node.left, output);
      output.push(node.val);
      this._traverse(node.right, output);
    }
  }

  next() {
    if (this.hasNext()) {
      return this.output[this.count++];
    }
  }

  hasNext() {
    return this.count <= this.output.length - 1;
  }
}

// beter by space complexity
class BSTIterator {
  constructor(root) {
    this.stack = [];
    this._traverse(root)
  }

  _traverse(node) {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  next() {
    const top = this.stack.pop();

    if (top.right) {
      this._traverse(top.right);
    }

    return top.val;
  }

  hasNext() {
    return this.stack.length > 0;
  }
}