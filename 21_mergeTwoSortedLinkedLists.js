/**
 * 21. Merge Two Sorted Lists
 */
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeTwoLists = function(l1, l2) {
  const tempNode = new ListNode(0);
  let currentNode = tempNode;

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      currentNode.next  = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }

    currentNode = currentNode.next;
  }

  if (l1 !== null) {
    currentNode.next = l1;
    l1 = l1.next;
  }

  if (l2 !== null) {
    currentNode.next = l2;
    l2 = l2.next;
  }

  return tempNode.next;
}
