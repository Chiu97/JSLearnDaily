function postorderTraversal(root: TreeNode | null): number[] {
    if (root===null) return []
    
    let stack = [root]
    let extendSet = new Set<TreeNode>()
    let res = []
    let isLeaf = (node: TreeNode) => !node.left && !node.right
  
    while (stack.length) {
        var node = stack.pop()
        if (isLeaf(node)) {
            res.push(node.val)
            continue
        }
  
        if (extendSet.has(node)) {
            res.push(node.val)
            continue
        }
  
        extendSet.add(node)
        stack.push(node)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    
    return res
  };