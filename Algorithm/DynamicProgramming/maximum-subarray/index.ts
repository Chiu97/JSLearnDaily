function maxSubArray(nums: number[]): number {
    if (nums.length===0) return 0
    
    let preSum = 0
    let max = nums[0]

    for (let i=1; i<nums.length; i++) {
        const val = nums[i]
        let curSum = preSum + val
        if (preSum+val>0) preSum = preSum+val
        else preSum = 0
        if (curSum>max) max = curSum
    }

    return max
};

const testCase = [-2,1,-3,4,-1,2,1,-5,4]
const output = maxSubArray(testCase)
console.log(output)
export {}