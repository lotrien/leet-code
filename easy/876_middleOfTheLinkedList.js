/**
 * 876. Middle of the Linked List
 */
const middleNode = function(head) {
  let len = 0;
  let current = head;
  while (current) {
    len++;
    current = current.next;
  }

  let idx = (len % 2 === 0) ? len / 2 +1 : Math.ceil(len / 2);

  let count = 1;
  while (count !== idx) {
    head = head.next;
    count++;
  }

  return head;
}
