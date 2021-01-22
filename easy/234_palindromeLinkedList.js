/**
 * 234. Palindrome Linked List
 */
const isPalindrome = function(head) {
  const res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }

  let start = 0;
  let end = res.length - 1;

  while (start <= end) {
    if (res[start] !== res[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}
