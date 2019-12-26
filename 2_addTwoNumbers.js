/**
 * 2. Add Two Numbers
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function(l1, l2) {
  const solo = new ListNode(0);
  let leftOvers = 0;
  let p = l1;
  let q = l2;
  let current = solo;

  while (p || q) {
    const x = p ? p.val : 0;
    const y = q ? q.val : 0;

    let sum = leftOvers + x + y;
    leftOvers = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (p !== null) {
      p = p.next;
    }

    if (q !== null) {
      q = q.next;
    }
  }

  if (leftOvers > 0) {
    current.next = new ListNode(leftOvers);
  }

  return solo.next;
}
