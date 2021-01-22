/**
 * 708. Insert into a Sorted Circular Linked List
 */
const insert = function(head, insertVal) {
  if (!head) {
    const newNode = new Node(insertVal, null);
    newNode.next = newNode;
    return newNode;
  }

  let prev = head;
  let current = head.next;

  let toInsert = false;

  do {
    if (prev.val <= insertVal && insertVal <= current.val) {
      toInsert = true;
    } else if (prev.val > current.val) {
      if (insertVal >= prev.val || insertVal <= current.val) {
        toInsert = true;
      }
    }

    if (toInsert) {
      prev.next = new Node(insertVal, current);
      return head;
    }

    prev = current;
    current = current.next;
  } while (prev !== head);

  prev.next = new Node(insertVal, current);
  return head;
}
