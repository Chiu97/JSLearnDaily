function summaryRanges(nums: number[]): string[] {
    if (nums.length===0) return []
    let middleLayer: number[][] = []
    let prev: number[] = [nums[0], nums[0]]
    middleLayer.push(prev)

    for (let i=1; i<nums.length; i++) {
        let cv = nums[i]
        if (cv-prev[1]===1) {
            prev[1]++
            continue
        }
        prev = [cv, cv]
        middleLayer.push(prev)
    }

    return middleLayer.map( range => range[0] === range[1] ? (range[0] + '') : (range[0] + '->' + range[1]))
};

const input = [0,2,3,4,6,8,9]
const output = summaryRanges(input)
const expect = ["0","2->4","6","8->9"]
const assert = require('assert')
assert.deepEqual(output, expect)
export {}