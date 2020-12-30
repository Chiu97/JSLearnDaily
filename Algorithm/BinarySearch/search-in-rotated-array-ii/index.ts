function search(nums: number[], target: number): boolean {
    let rotatedIdx = 0
    for (let i=1; i<nums.length; i++) {
        if (nums[i]<nums[i-1]) {
            rotatedIdx = i
            break
        }
    }

    const left = nums.slice(0, rotatedIdx)
    const right = nums.slice(rotatedIdx)
    const realSorted = right.concat(left)
    
    function binarySearch (left: number, right: number) {
        if (right-left<2) {
            if (realSorted[left]===target||realSorted[right]===target) return true
            return false
        }

        const mid = Math.floor(left + (right-left)/2)
        if (realSorted[mid]===target) return true
        if (realSorted[mid] > target) {
            return binarySearch(left, mid)
        } else {
            return binarySearch(mid+1, right)
        }
    }

    return binarySearch(0, realSorted.length-1)
};


const input = [3,1,1]
const target = 3
const output = search(input, target)
console.log(output)
export {}