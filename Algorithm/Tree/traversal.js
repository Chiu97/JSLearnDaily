// 遍历二叉树

class CNode {
  constructor(value = null) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// 递归方法
function preOrderTvs(head) {
  if(head===null) {
    return;
  }
  console.log(head.value);
  preOrderTvs(head.left);
  preOrderTvs(head.right);
}

function inOrderTvs(head) {
  if(head===null) {
    return;
  }
  inOrderTvs(head.left);
  console.log(head.value);
  inOrderTvs(head.right);
}

function posOrderTvs(head) {
  if(head===null) {
    return;
  }
  posOrderTvs(head.left);
  posOrderTvs(head.right);
  console.log(head.value);
}

// 非递归遍历

function preOrderNotRcs(head) {
  let stack = [];
  if(head === null) {
    return;
  }
  stack.push(head);
  while(stack.length > 0) {
    let pItem = stack.pop();
    console.log(pItem.value + ',');
    if(pItem.left!==null) {
      stack.push(pItem.left);
    }
    if(pItem.right!==null) {
      stack.push(pItem.right);
    }
  }
}
