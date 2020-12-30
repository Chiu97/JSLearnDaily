import { ListNode, constructListFromArr, printListToArr } from '../../Link/ListNode'

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head) return null

    let gte_pointer: ListNode
    let gte_head: ListNode|null
    let lt_pointer: ListNode
    let lt_head: ListNode|null

    let cur_pointer = head
    while (cur_pointer) {
        const nextIterNode = cur_pointer.next
        if (cur_pointer.val < x) {
            if (lt_pointer) {
                lt_pointer.next = cur_pointer
                lt_pointer = cur_pointer
            } else {
                lt_pointer = cur_pointer
                lt_head = cur_pointer
            }
        } else {
            if (gte_pointer) {
                gte_pointer.next = cur_pointer
                gte_pointer = cur_pointer
            } else {
                gte_pointer = cur_pointer
                gte_head = cur_pointer
            }
        }
        cur_pointer.next = null
        cur_pointer = nextIterNode
    }

    if (!lt_head) return gte_head
    if (!gte_head) return lt_head
    
    lt_pointer.next = gte_head
    return lt_head
};

const list = [1,4,3,2,5,2]
const x = 3
const listHead = constructListFromArr(list)
const output = printListToArr(partition(listHead, x))
const expect = [1,2,2,4,3,5]
const assert = require('assert')
assert.deepEqual(output, expect)