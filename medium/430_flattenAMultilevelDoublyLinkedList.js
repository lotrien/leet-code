/**
 * 430. Flatten a Multilevel Doubly Linked List
 */
function Node(val,prev,next,child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
}

const flatten = function(head) {
  if (!head) {
    return head;
  }

  const pseudo = new Node(0, null, head, null);

  let prev = pseudo;
  const stack = [];
  stack.push(head);

  while (stack) {
    const current = stack.pop();
    prev.next = current;
    current.prev = prev;

    if (current.next) {
      stack.push(current.next);
    }

    if (current.child) {
      stack.push(current.child);
      current.child = null;
    }

    prev = current;
  }
  pseudo.next.prev = null;

  return pseudo.next;
}
