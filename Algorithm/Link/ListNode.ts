class ListNode {
    val: number
    next: ListNode|null

    constructor(val: number) {
        this.val = val
        this.next = null
    }
}

const constructListFromArr = (arr: number[]): ListNode|null => {
    if (!arr.length) return null

    const head = new ListNode(arr[0])
    let cur = head
    let i=0
    while (++i<arr.length) {
        cur.next = new ListNode(arr[i])
        cur = cur.next
    }

    return head
}

const printListToArr = (head: ListNode) => {
    let visited = new Set<ListNode>()

    let cur = head
    let res = []
    while (cur) {
        if (visited.has(cur)) {
            res.push(cur.val)
            return
        }
        visited.add(cur)
        res.push(cur.val)
        cur = cur.next
    }

    return res
}

export {
    ListNode, constructListFromArr, printListToArr
}