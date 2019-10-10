/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var res = false;
var hasPathSum = function(root, sum) {
  pathHelper(root,sum);
  return res;
};

var pathHelper = function(root, sum) {
  if(root===null) {
    return;
  }
  let temp = sum - root.val;
  if(root.left===null && root.right===null) {
    if(temp===0) {
      res = true;
    }
    return;
  }
  if(root.left!==null) {
    pathHelper(root.left,temp);
  }
  if(root.right!==null) {
    pathHelper(root.right,temp);
  }
};