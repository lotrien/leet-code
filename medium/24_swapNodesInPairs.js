/**
 * 24. Swap Nodes in Pairs
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const swapPairs = function(head) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;

  while (head && head.next) {
    const first = head;
    const second = head.next;

    prev.next = second;
    first.next = second.next;
    second.next = first;

    prev = first;
    head = first.next;
  }

  return dummy.next;
}
