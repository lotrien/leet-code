/**
 * 701. Insert into a Binary Search Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 1
const insertIntoBST = function(root, val) {
  if (!root) {
    return;
  }

  let inserted = false;

  function _insert(node) {
    if (node.val > val) {
      if (!node.left) {
        node.left = new TreeNode(val);
        inserted = true;
      } else {
        _insert(node.left, val);
      }
    } else {
      if (!node.right) {
        node.right = new TreeNode(val);
        inserted = true;
      } else {
        _insert(node.right, val);
      }
    }
  }

  while (!inserted) {
    _insert(root);
  }

  return root;
}

// 2
const insertIntoBST = function(root, val) {
  if (!root) {
    return new TreeNode(val);
  }

  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
}