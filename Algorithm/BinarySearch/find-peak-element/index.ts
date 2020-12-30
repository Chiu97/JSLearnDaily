function findPeakElement(nums: number[]): number {
    if (nums.length===1) return 0

    function isPeek (idx: number) {
        if (idx===0) return nums[idx] > nums[idx+1]
        if (idx===nums.length-1) return nums[idx] > nums[idx-1]
        if (nums[idx]>nums[idx-1]&&nums[idx]>nums[idx+1]) return true
        return false
    }

    function binarySearch(left: number, right: number): number|undefined {
        if (isPeek(left)) return left
        if (isPeek(right)) return right

        var mid = left + Math.floor((right-left)/2)
        if (isPeek(mid)) return mid
        if (nums[mid]<nums[left]) return binarySearch(left, mid)
        if (nums[mid]<nums[right]) return binarySearch(mid+1, right)
        return binarySearch(left+1, right-1)
    }

    return binarySearch(0, nums.length-1)
};

const input = [1,2,1,3,5,6,4]
const output = findPeakElement(input)
console.log(output)

export {}