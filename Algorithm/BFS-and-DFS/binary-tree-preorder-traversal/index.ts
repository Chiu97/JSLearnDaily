function preorderTraversal(root: TreeNode | null): number[] {
    let res = []
    if (!root) return []

    function preorder(node: TreeNode) {
        res.push(node.val)
        if (node.left) {
            preorder(node.left)
        }

        if (node.right) {
            preorder(node.right)
        }
    }

    preorder(root)

    return res
};

export {}