/**
 * 700. Search in a Binary Search Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// recursion 1
const searchBST = function(root, val) {
  if (!root) {
    return null;
  }

  function _search(node) {
    if (!node) {
      return null;
    }
    
    if (node.val > val) {
      return _search(node.left);
    } else if (node.val < val) {
      return _search(node.right);
    } else {
      return node;
    }
  }

  return _search(root);
}

// recursion 2
const searchBST = function(root, val) {
  if (!root || root.val === val) {
    return root;
  }

  return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
}

// iteration
const searchBST = function(root, val) {
  while (root && root.val !== val) {
    root = root.val > val ? root.left : root.right;
  }

  return root;
}
