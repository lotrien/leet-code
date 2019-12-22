/**
 * 206. Reverse Linked List
 */
class LinkedList {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = head => {
  let prev = null;

  while (head !== null) {
    const nextTemp = head.next;
    head.next = prev;
    prev = head;
    head = nextTemp;
  }

  return prev;
}
