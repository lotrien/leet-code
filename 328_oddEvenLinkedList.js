/**
 * 328. Odd Even Linked List
 */
var oddEvenList = function(head) {
  if (!head) {
    return null;
  }

  let oddPointer = head;
  let evenPointer = head.next;
  let evenHead = evenPointer;

  while (evenPointer && evenPointer.next) {
    oddPointer.next = evenPointer.next;
    oddPointer = oddPointer.next;
    evenPointer.next = oddPointer.next;
    evenPointer = evenPointer.next;
  }
  oddPointer.next = evenHead;

  return head;
}
