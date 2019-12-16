/**
 * 206. Reverse Linked List
 * 
 * Reverse a singly linked list.
 * 
 * Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
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
