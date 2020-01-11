/**
 * 5145. Sum of Nodes with Even-Valued Grandparent
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sumEvenGrandparent = function(root) {
  if (!root) {
    return 0;
  }

  let sum = 0;

  let queue = [{ node: root }];

  while (queue.length) {
    debugger;
    const { node, evenParent = false, evenGrand = false } = queue.shift();

    if (evenGrand) {
      sum += node.val;
    }

    let eGrand = evenParent;
    let eParent = node.val % 2 === 0;

    if (node.left) {
      queue.push({node: node.left, evenGrand: eGrand, evenParent: eParent });
    }
    if (node.right) {
      queue.push({ node: node.right, evenGrand: eGrand, evenParent: eParent });
    }
  }

  return sum;
}
