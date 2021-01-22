/**
 * 82. Remove Duplicates from Sorted List II
 */
const deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }

  let zero = new ListNode(0);
  zero.next = head;

  let current = zero;

  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      const dub = current.next.val;

      while (current.next && current.next.val === dub) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }

  return zero.next;
}
