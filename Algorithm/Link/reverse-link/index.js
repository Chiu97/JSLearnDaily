/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */


var reverseList = function(head) {
  let arr = [];
  let cur = head;
  while(cur !== null) {
    arr.push(cur.val);
    let next = cur.next;
    cur = null;
    cur = next;
  }
  cur = head;
  while(cur !== null) {
    cur.val = arr.pop();
    let next = cur.next;
    cur = null;
    cur = next;
  }
  return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}