// 寻找链表倒数第N个元素  
class LinkNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }  
}
let node1 = new LinkNode(1);
let node2 = new LinkNode(2);
let node3 = new LinkNode(3);
let node4 = new LinkNode(4);
let node5 = new LinkNode(5);
let node6 = new LinkNode(6);
let node7 = new LinkNode(7);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;

function findK(head,k) {
  let slow = head;
  let fast = head;
  for(let i=0; i<k; i++) {
    let temp = fast.next;
    fast = null;
    fast = temp;
  }
  while(fast!==null) {
    let temp1 = fast.next;
    let temp2 = slow.next;
    fast = null;
    slow = null;
    fast = temp1;
    slow = temp2;
  }
  return slow;
}

let res = findK(node1,3);
console.log(res);