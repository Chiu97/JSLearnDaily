class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const sz = nums.length
    if (sz===0) return null
    if (sz===1) return new TreeNode(nums[0])
    if (sz===2) {
        const node = new TreeNode(nums[0])
        const nextChild = new TreeNode(nums[1])
        if (node.val>nextChild.val) node.left = nextChild
        else node.right = nextChild
        return node
    }
    const midIdx = Math.floor((0+sz)/2)
    const leftTreeArr = nums.slice(0, midIdx)
    const rightTreeArr = nums.slice(midIdx+1)

    const subtreeRoot = new TreeNode(nums[midIdx])
    subtreeRoot.left = sortedArrayToBST(leftTreeArr)
    subtreeRoot.right = sortedArrayToBST(rightTreeArr)
    return subtreeRoot
};
