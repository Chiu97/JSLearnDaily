import { stringify } from "querystring"
import { parse } from "../../../node_modules/@babel/parser/typings/babel-parser"

function monotoneIncreasingDigits(N: number): number {
    let nums = [...String(N)].map(val => parseInt(val, 10))
    const sz = nums.length

    function checkIfNeedDecrease(left: number) {
        let curVal = nums[left]

        for (let i=left+1; i<sz; i++) {
            const iVal = nums[i]
            if (iVal===curVal) continue
            else return iVal < curVal
        }

        return false
    }

    function next(left: number): string {
        if (left===sz-1) return String(nums[left])
        const needDecrease = checkIfNeedDecrease(left)
        if (needDecrease) {
            return (nums[left]-1) + '9'.repeat(sz-left-1)
        }

        return nums[left] + next(left+1)
    }

    return parseInt(next(0))
};

const assert = require('assert')
const testCase = 332
const output = monotoneIncreasingDigits(testCase)
const expectVal = 299
assert.equal(output, expectVal)

export {}