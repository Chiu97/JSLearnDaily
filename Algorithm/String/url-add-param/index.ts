const assert = require('assert')

function __getType (val: any): string {
    if (val===null) return 'null'
    return typeof val
}

/**
 * check if all vals of same type
 */
function __sameTypeCheck (vals: string[], targetType: string) {
    if (targetType===undefined) {
        for (let i=1; i<vals.length; i++) {
            if (__getType(vals[i]) !== __getType(vals[i-1])) return false
        }
        return true
    } else {
        for (let i=0; i<vals.length; i++) {
            if (__getType(vals[i]) !== targetType) return false
        }
        return true
    }
}
/**
 * 给url增加param, 如果已存在的时候进行替换
 */
function addParamToUrl (url: string, key: string, value: string): string {
    if (!__sameTypeCheck([url, key, value], 'string')) {
        throw new TypeError('url, key and val have to be all string type')
    }

    if (!url.includes('?')) {
        return `${url}?${key}=${value}`
    }

    const [baseUrlPart, queryPartString] = url.split('?')
    const allQueryString = queryPartString.split('&')
    const keyValMap = new Map<string, string>()
    allQueryString.forEach(str => {
        const [cKey, cVal] = str.split('=')
        keyValMap.set(cKey, cVal)
    })

    keyValMap.set(key, value)
    let finalUrl = baseUrlPart + '?'
    keyValMap.forEach((val, key) => {
        finalUrl += `${key}=${val}&`
    })

    return finalUrl.slice(0, -1)
}


const testUrl = 'www.example.com/resource'
const key1 = 'hello'
const val1 = 'world'
const initParamTest = addParamToUrl(testUrl, key1, val1)
const expectedTest1 = `${testUrl}?${key1}=${val1}`
assert.equal(initParamTest, expectedTest1, 'should add one param correctly')
const key2 = 'iam'
const val2 = 'fine'
const addNewParamTest = addParamToUrl(initParamTest, key2, val2)
const expectedTest2 = `${testUrl}?${key1}=${val1}&${key2}=${val2}`
assert.equal(addNewParamTest, expectedTest2, 'should add another param correctly')
const key3 = 'hello'
const val3 = 'judy'
const replacePreParamTest = addParamToUrl(addNewParamTest, key3, val3)
const expectedTest3 = `${testUrl}?${key3}=${val3}&${key2}=${val2}`
assert.equal(replacePreParamTest, expectedTest3, 'should add another param correctly')

export default addParamToUrl