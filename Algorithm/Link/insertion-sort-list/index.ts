function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head) return null
    var sorted: ListNode = head

    function insertIntoSortedTail(node: ListNode|null) {
        if (node === null) return
        let nextTodoInsert = node.next
        if (node.val<sorted.val) {
            node.next = sorted
            sorted = node
            if (nextTodoInsert) insertIntoSortedTail(nextTodoInsert)
            return
        } else {
            let target = sorted.next
            let prev = sorted
            while (target) {
                if (target.val>node.val) {
                    prev.next = node
                    node.next = target
                    // let targetNext = target.next
                    // target.next = node
                    // node.next = targetNext
                    insertIntoSortedTail(nextTodoInsert)
                    return
                }
                prev = target
                target = target.next
            }
            prev.next = node
            node.next = null
            insertIntoSortedTail(nextTodoInsert)
            return 
        }
    }

    const nextTodo = sorted.next
    sorted.next = null
    insertIntoSortedTail(nextTodo)
    return sorted
};

export {}