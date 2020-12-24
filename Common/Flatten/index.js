const _ = require('lodash')
const assert = require('assert')
const baseFlatten = (val, depth) => {
  if (!Array.isArray(val)||!depth) return val
  let res = []

  val.forEach(item => {
    if (!Array.isArray(item)) {
      res.push(item)
      return
    }

    res.push(...baseFlatten(item, depth-1))
  })

  return res
}

const testCase = [1, [2, [3, 4, [5, 6]], [7]]]
const testRes = baseFlatten(testCase, 2)
const expectedOutput = _.flattenDepth(testCase, 2)
assert.deepEqual(testRes, expectedOutput, 'Base Flatten should behave just like lodash flatten')