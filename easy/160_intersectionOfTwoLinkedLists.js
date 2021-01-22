/**
 * 160. Intersection of Two Linked Lists
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// requires additional space O(n)
const getIntersectionNode = function(headA, headB) {
  const set = new Set();

  let first = headA;
  while (first) {
    set.add(first);
    first = first.next;
  }

  let second = headB;
  while (second) {
    if (set.has(second)) {
      return second;
    } else {
      second = second.next;
    }
  }

  return null;
}

const getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let first = headA;
  let second = headB;

  while (first !== second) {
    first = first.next;
    second = second.next;

    if (first === second) {
      return first;
    }

    if (first === null) {
      first = headB;
    }

    if (second === null) {
      second = headA;
    }
  }

  return first;
}
