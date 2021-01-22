/**
 * 138. Copy List with Random Pointer
 */
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

const copyRandomList = function(head, visited = new Map()) {
  if (!head) {
    return head;
  }

  if (visited.has(head)) {
    return visited.get(head);
  }

  const node = new Node(head.val, null, null);
  visited.set(head, node);

  node.next = copyRandomList(head.next, visited);
  node.random = copyRandomList(head.random, visited);

  return node;
}
