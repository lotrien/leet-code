/**
 * 61. Rotate List
 */
const rotateRight = function(head, k) {
  if (!head || !head.next) {
    return head;
  }
  
  let oldTail = head;
  let len = 1;

  while (oldTail.next) {
    oldTail = oldTail.next;
    len++;
  }

  oldTail.next = head;
  
  let newTail = head;
  for (let i = 0; i < len - k % len - 1; i++) {
    newTail = newTail.next;
  }
  
  const newHead = newTail.next;
  newTail.next = null;
  return newHead;
}
