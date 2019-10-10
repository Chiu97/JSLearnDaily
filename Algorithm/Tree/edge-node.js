// 逆时针遍历边界节点
// @unsolve
let leftArr = [];
let rightArr = [];
let leftHeight = [];
let rightHeight = [];
let nodeSelected = null;
function findLeftEdgeNode(head,height) {
  if(head===null) {
    return;
  }
  if(head.left===null&&head.right===null&&height!==0&&head!==nodeSelected) {
    leftArr.push(head.value);
    return;
  }
  if(head.left!==null) {
    if(!leftHeight[height]) {
      leftArr.push(head.left.value);
      leftHeight[height] = true;
      height++;
      nodeSelected = head.left;
    }
    findLeftEdgeNode(head.left,height);
  }
  if(head.right!==null) {
    if(leftHeight[height]!==true) {
      leftArr.push(head.right.value);
      leftHeight[height] = true;
      height++;
      nodeSelected = head.right; 
    }
    findLeftEdgeNode(head.right,height);
  }
}
function findRightEdgeNode(head,height) {
  if(head===null) {
    return;
  }
  if(head.left===null&&head.right===null&&height!==0&&head!==head.nodeSelected) {
    rightArr.push(head.value);
    return;
  }
  if(head.right!==null) {
    if(rightHeight[height]!==true) {
      rightArr.push(head.right.value);
      rightHeight[height] = true;
      heigth++;
      nodeSelected = head.right;
    }
    findRightEdgeNode(head.right);
    return;
  }
  if(head.left!==null) {
    if(rightHeight[height]!==true) {
      rightArr.push(head.left.value);
      rightHeight[height] = true;
      height++;
      nodeSelected = head.left;
    }
    findRightEdgeNode(head.left);
    return;
  }
}
function main(head) {
  let res = '';
  let singleArr = [];
  if(head===null) {
    return;
  }
  singleArr.push(head.value);
  while(head.left===null||head.right===null) {
    if(head.left===null&&head.right===null) {
      return;
    }
    if(head.left!==null) {
      singleArr.push(head.left.value);
      head = head.left;
    }
    if(head.right!==null) {
      singleArr.push(head.right.value);
      head=head.right;
    }
  }
  res += singleArr.join(' ');
  findLeftEdgeNode(head.left,0);
  findRightEdgeNode(head.right,0);
  rightArr = rightArr.reverse();
  if(head.left!==null) {
    res += head.left.value + ' ';
  };
  res += leftArr.join(' ');
  res += rightArr.join(' ');
  if(head.right!==null) {
    res += head.right.value;
  }
  console.log(res);
  return res;
}

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

let node0 = new Node(1);
let node1 = new Node(2);
let node2 = new Node(3);
let node3 = new Node(4);
node0.left = node1;
node0.right = node2;
node1.right = node3;
main(node0);