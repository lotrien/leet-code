/**
 * 536. Construct Binary Tree from String
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const str2tree = function(s) {
  let i = 0;

  function _build(s) {
    const num = [];

    while (s[i] === '-' || (s[i] >= '0' && s[i] <= '9')) {
      num.push(s[i++]);
    }

    if (!num.length) {
      return null;
    }

    const node = new TreeNode(Number(num.join('')));

    if (s[i] === '(') {
      i++;
      node.left = _build(s);
      i++
    }

    if (s[i] === '(') {
      i++;
      node.right = _build(s);
      i++;
    }

    return node;
  }

  return _build(s);  
}
