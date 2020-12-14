const isObject = (val: unknown) => typeof val === 'object' && val !== null

const createArray = <T>(length: number, initialVal: T) => Array.from({length}, () => isObject(initialVal) ? copyObject(initialVal) : initialVal)

const copyObject = (val: any) => Array.isArray(val) ? [...val] : Object.assign({}, val)

/**
 * get length of val, if is array, return array.length, if is normal object type, return its own properties numbers
 */
const len = function (val: unknown): number {
    if (!isObject(val)) return -1
    if (Array.isArray(val)) return val.length
    return Object.keys(val).length
}

var pickRandomFromArr = <T>(arr: T[]) => arr[Math.floor(Math.random()*len(arr))]

const baseNumberComparator = (a: number, b: number) => a - b

export {
    isObject, len, pickRandomFromArr, createArray, copyObject, baseNumberComparator
}
