// 两种情况下print,1.没有左子树 2.发现节点的右节点指向current
// const process = require('process');
function morris(head) {
  if(head===null) {
    return;
  }
  let current = head;
  let rightMost = null;
  while(current !== null) {
    if(current.left===null) {
      process.stdout.write(current.value + ' ');
    }
    rightMost = current.right;
    while(rightMost.right!==null&&rightMost.right!==current) {
      rightMost = rightMost.right;
    }
    if(rightMost.right===null) {
      rightMost.right = current;
      current = current.left;
      continue;
    }
    if(rightMost.right===current) {
      rightMost.right = null;
      process.stdout.write(current.value + ' ');
      current = current.right;
    }
  }
}
