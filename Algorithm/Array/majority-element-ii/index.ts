function majorityElement(nums: number[]): number[] {
    if (nums.length<3) return [...new Set(nums)]

    let res = new Set<number>()
    let base = Math.floor((nums.length)/3)
    nums.sort((a, b) => a - b)

    let prev = nums[0]
    let accLen = 1
    for (let i=1; i<nums.length; i++) {
        if (nums[i]===prev) {
            accLen++
        } else {
            prev = nums[i]
            accLen = 1
        }
        if (accLen>base) res.add(nums[i])
    }

    return [...res]
};

const input = [1,1,1,3,3,2,2,2]
const output = majorityElement(input)
const expect = [1, 2]
const assert = require('assert')
assert.deepEqual(output, expect)
export {}