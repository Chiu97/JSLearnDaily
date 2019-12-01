function Node(val) {
    this.val = val;
    this.next = null;
    this.random = null;
}

var copyRandomList = function(head) {
    if(head===null)
        return null;
    let map = new Map();
    let retHead = new Node(head.val);
    let curNode = new Node(head.val);
    map.set(head.val, curNode);
    retHead.next = curNode;

    while(head!==null) {
        if(head.next!==null) {
            if(map.has(head.next.val)) {
                curNode.next = map.get(head.next.val);
            } else {
                let nextNode = new Node(head.next.val);
                curNode.next = nextNode;
                map.set(head.next.val, nextNode);
            }
        }

        if(head.random===null) {
            curNode.random = null;
        } else {
            if(map.has(head.random.val)) {
                curNode.random = map.get(head.random.val);
            } else {
                let randomNode = new Node(head.random.val);
                curNode.random = randomNode;
                map.set(head.random.val, randomNode);
            }
        }

        curNode = curNode.next;
        head = head.next;
    }

    return retHead.next;
}