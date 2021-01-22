/**
 * 19. Remove Nth Node From End of List
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const removeNthFromEnd = function(head, n) {
  if (!head) {
    return;
  }

  let len = 0;
  const dummy = new ListNode(0);

  dummy.next = head;

  while (head) {
    len++;
    head = head.next;
  }

  head = dummy;

  while (len - n > 0) {
    len--;
    head = head.next;
  }

  head.next = head.next.next;

  return dummy.next;
}

const removeNthFromEnd = function(head, n) {
  if (!head) {
    return;
  }

  const dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  for (let i = 1; i <= n + 1; i++) {
    first = first.next;
  }

  while (first) {
    first = first.next;
    second = second.next;
  }

  second.next = second.next.next;
  return dummy.next;
}
