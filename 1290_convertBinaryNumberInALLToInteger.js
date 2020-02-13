/**
 * 1290. Convert Binary Number in a Linked List to Integer
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

var getDecimalValue = function(head) {
  if (!head) {
    return;
  }

  let res = '';

  while (head) {
    res += head.val;
    head = head.next;
  }

  return parseInt(res, 2);
}
