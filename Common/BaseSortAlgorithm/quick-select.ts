const assert = require('assert')
import { len, pickRandomFromArr, copyObject, baseNumberComparator } from  './utils'

enum ValueCompare {
    smaller = -1,
    equal,
    greater
}

type NumberArray = number[]

interface QuickSelect {
    (unsortedArray: number[], k: number): number[]
}

var valCompareForSwitch = (val1: number, val2: number) => {
    if (val1 > val2) return ValueCompare.greater
    else if (val1 === val2) return ValueCompare.equal
    else return ValueCompare.smaller
}

/**
 * @description quick select to get the top k smallest number, if you want to get the  kth smallest number, just pick the greatest number from this output
 */
var quickSelect: QuickSelect = function (unsortedArray, k) {
    if (len(unsortedArray) < k) return []
    if (len(unsortedArray) == k) return unsortedArray
    if (unsortedArray.length < 2) return unsortedArray

    let pivot = pickRandomFromArr(unsortedArray)
    let smaller: NumberArray = []
    let greater: NumberArray = []

    unsortedArray.forEach(val => {
        if (val <= pivot) smaller.push(val)
        else greater.push(val)
    })

    const smallerLen = len(smaller)
    const valCompare = valCompareForSwitch(smallerLen, k)

    switch (valCompare) {
        case ValueCompare.greater:
            return quickSelect(smaller, k)
        case ValueCompare.equal:
            return smaller
        case ValueCompare.smaller:
            return smaller.concat(quickSelect(greater, k-smallerLen))
    }
}

const testCaseArr = [17, 2, 12, 4, 8, 11]
const testCaseK = 5
const testResult = quickSelect(testCaseArr, testCaseK)
const copyTestArr = copyObject(testCaseArr)
// do remember that it doesn't take care when k is greater than length of testcase array
const expectedResult = copyTestArr.sort(baseNumberComparator).slice(0, testCaseK)
assert.deepEqual(testResult, expectedResult, 'it should be the same array in each element')

export default quickSelect