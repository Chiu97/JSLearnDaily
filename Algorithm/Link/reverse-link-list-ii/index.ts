import { ListNode, constructListFromArr, printListToArr} from '../ListNode'

function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
    if (!head) return null
    const fakeHead = new ListNode(0)
    fakeHead.next = head
    let reverseHead = fakeHead

    let i = 1
    while (i<m) {
        i++
        reverseHead = reverseHead.next
    }

    function reverse(head: ListNode|null, len: number) {
        if (!head||!head.next) return
        const tailNode = head.next
        let reversePrev = head.next
        let reversePost = reversePrev.next

        while (len>0&&reversePost) {
            const nextPost = reversePost.next
            reversePost.next = reversePrev
            reversePrev = reversePost
            reversePost = nextPost
            len--
        }

        head.next = reversePrev
        tailNode.next = reversePost
    }

    reverse(reverseHead, n-m)

    return fakeHead.next
};


const testArr = [1, 2, 3, 4, 5]
const m = 2
const n = 8
const output = reverseBetween(constructListFromArr(testArr), m, n)
console.log(printListToArr(output))
export {}