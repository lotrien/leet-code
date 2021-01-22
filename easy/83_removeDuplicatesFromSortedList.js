/**
 * 83. Remove Duplicates from Sorted List
 */
const deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }

  let current = head;
  while (current && current.next) {
    if (current.next.val === current.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
