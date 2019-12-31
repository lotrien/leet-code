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
