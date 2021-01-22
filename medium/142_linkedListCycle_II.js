/**
 * 142. Linked List Cycle II
 */
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const detectCycle = function(head) {
  const set = new Set();
  let node = head;

  while (node) {
    if (set.has(node)) {
      return node;
    }
    set.add(node);
    node = node.next;
  }

  return null;
}
