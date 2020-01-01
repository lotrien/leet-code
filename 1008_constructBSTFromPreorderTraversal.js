/**
 * 1008. Construct Binary Search Tree from Preorder Traversal
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// not optimal for BST, better for BT
const bstFromPreorder = function(preorder) {
  let preIdx = 0;
  let idxMap = {};

  const inorder = [...preorder].sort((a, b) => a - b);

  inorder.forEach((value, key) => {
    idxMap[value] = key;
  })

  function _builder(inLeft = 0, inRight = inorder.length) {
    if (inLeft === inRight) {
      return null;
    }

    const root = new TreeNode(preorder[preIdx]);
    const index = idxMap[preorder[preIdx]];

    preIdx++;

    root.left = _builder(inLeft, index);
    root.right = _builder(index+1, inRight);
    return root;
  }

  return _builder();
}

// optimal for BST
const bstFromPreorder = function(preorder) {
  let idx = 0;

  function _builder(low = -Infinity, high = Infinity) {
    if (idx === preorder.length) {
      return null;
    }

    const value = preorder[idx];

    if (value < low || value > high) {
      return null;
    }

    idx++;

    const root = new TreeNode(value);

    root.left = _builder(low, value);
    root.right = _builder(value, high);

    return root;
  }

  return _builder();
}
