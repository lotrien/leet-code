/**
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const buildTree = function(inorder, postorder) {
  let postIdx = postorder.length - 1;
  let idxMap = {};

  inorder.forEach((value, key) => { idxMap[value] = key });

  function _builder(inLeft, inRight) {
    if (inLeft > inRight) {
      return null;
    }

    const value = postorder[postIdx];
    const root = new TreeNode(value);
    const index = idxMap[value];

    postIdx--;

    root.right = _builder(index + 1, inRight);
    root.left = _builder(inLeft, index - 1);

    return root;
  }

  return _builder(0, inorder.length - 1);
}
