function removeDuplicates(nums: number[]): number {
    if (nums.length<3) return nums.length

    let iterPointer = 1
    let validPointer = 1

    for (; iterPointer<nums.length; iterPointer++) {
        if (nums[iterPointer]!==nums[iterPointer-1]||nums[iterPointer]!==nums[iterPointer+1]) {
            nums[validPointer++] = nums[iterPointer]
        }
    }

    return validPointer
};

const input = [1,1,1,1,2,2,3,3]
const output = removeDuplicates(input)
console.log(output)

export {}