/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const buildTree = function(preorder, inorder) {
  let preIdx = 0;
  let idxMap = {};
  
  inorder.forEach((value, key) => {
    idxMap[value] = key;
  })
  
  function _builder(inLeft = 0, inRight = inorder.length) {
    if (inLeft === inRight) {
      return null;
    }

    const rootValue = preorder[preIdx];

    const root = new TreeNode(rootValue);
    const index = idxMap[rootValue];

    preIdx++;

    root.left = _builder(inLeft, index);
    root.right = _builder(index+1, inRight);
    return root;
  }

  return _builder();
}
