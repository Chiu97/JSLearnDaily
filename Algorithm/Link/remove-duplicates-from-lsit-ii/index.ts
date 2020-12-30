import { ListNode } from '../ListNode'

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return null
    let fakeHead = new ListNode(head.val-1)
    fakeHead.next = null
    let pre = fakeHead
    let cur = head
    let repeatedVal = head.val-1
    while (cur) {
        if (cur.val === repeatedVal) {
            cur = cur.next
            continue
        }
        if (cur.val !== pre.val) {
            if (!cur.next) {
                pre.next = cur
                break
            }
            if (cur.next.val !== cur.val) {
                pre.next = cur
                pre = cur
                cur = cur.next
                pre.next = null
                continue
            }
        }
        repeatedVal = cur.val
        cur = cur.next
    }

    return fakeHead.next
};

export {}