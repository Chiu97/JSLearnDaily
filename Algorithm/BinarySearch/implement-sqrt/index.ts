/**
 * get the square root of number, with precise limited
 */
function sqrt(num: number, precise: number): number {
    if (num<0) {
        throw new RangeError('negative number is invalid')
    }
    var powerBy2 = (num: number) => num * num
    var getMid = (left:number, right: number) => (left+right)/2
    var getAcceptableMid = (mid: number) => Math.abs(num-powerBy2(mid)) <= 1/Math.pow(10, precise)

    let left = 0
    let right = num
    while (true) {
        let mid = getMid(left, right)
        if (getAcceptableMid(mid)) {
            return Number.parseFloat(mid.toFixed(2))
        }

        if (powerBy2(mid)>num) {
            right = mid
        } else {
            left = mid
        }
    }
}

const testCase = 17
const expectedResult = Number.parseFloat(Math.sqrt(testCase).toFixed(2))
const testResult = sqrt(testCase, 2)
const assert = require('assert')
assert.ok(testResult===expectedResult)

export default sqrt