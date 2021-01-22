/**
 * 203. Remove Linked List Elements
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const removeElements = function(head, val) {
  const sentinel = new ListNode(0);
  sentinel.next = head;

  let prev = sentinel;
  let pointer = head;

  while (pointer) {
    if (pointer.val === val) {
      prev.next = pointer.next;
    } else {
      prev = pointer;
    }
    pointer = pointer.next
  }

  return sentinel.next;
}
