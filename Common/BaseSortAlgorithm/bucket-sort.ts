const assert = require('assert')

const isObject = (val: unknown) => typeof val === 'object' && val !== null
const copyObject = (val: any) => Array.isArray(val) ? [...val] : Object.assign({}, val)
const createArray = <T>(length: number, initialVal: T) => Array.from({length}, () => isObject(initialVal) ? copyObject(initialVal) : initialVal)

/**
 * @description bucket sort
 * steps:
 * 1. create buckets
 * 2. scatter
 * 3. inner sort
 * 4. gather
 */
function bucketSort (arr: number[]) {
    // create buckets, here we use 1 represent for range(10~19), numbers greater than 50 should be in the last bucket
    const buckets = createArray<number[]>(6, [])

    // scatter, choose the responsive bucket for the number, no buckets for negative number yet
    const getBucketIndex = (num: number) => num >= 50 ? 5 : Math.floor(num/10)
    arr.forEach(num => {
        const bucketIdx = getBucketIndex(num)
        buckets[bucketIdx].push(num)
    })
    
    // inner sort
    buckets.forEach(bucket => insertionSort(bucket))
    return buckets.reduce((acc, cv) => acc.concat(cv) ,[])
}

function swap (arr: number[], i: number, j: number) {
  const t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function insertionSort (arr: number[]) {
    if (arr.length<2) return
    let i = 1
    while (i<arr.length) {
        for (let j=i; j>0; j--) {
            if (arr[j]>=arr[j-1]) break
            swap(arr, j-1, j)
        }
        ++i
    }
}

var testArr = [0, 100, 31, 2, 42, 30, 30]
const result = bucketSort(testArr)
assert.deepEqual(result, copyObject(testArr).sort((a, b) => a - b), 'expected two array with same order')