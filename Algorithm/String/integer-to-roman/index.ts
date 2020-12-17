const assert = require('assert')

const RomanPairs: [string, string, string][] = [['M', 'O', 'P'], ['C', 'D', 'M'], ['X', 'L', 'C'], ['I', 'V', 'X']]
const bitRomanTransform = (oneR: string, fiveR: string, oneTen:string, num: number): string => {
    if (num > 9) throw new RangeError('number should with range(0-9)')
    if (num===0) return ''
    if (num === 9) return oneR + oneTen
    if (num < 4) return oneR.repeat(num)
    if (num === 4) return oneR + fiveR
    
    return fiveR + oneR.repeat(num-5)
}

const testBitRomanTransform = bitRomanTransform('I', 'V', 'X', 7)
assert.equal(testBitRomanTransform, 'VII', '7 should be represented with VII')
const testBitRomanTransformOutOfRangeError = () => bitRomanTransform('I', 'V', 'X', 17)
assert.throws(testBitRomanTransformOutOfRangeError, RangeError)

function intToRoman(num: number): string {
    let chars = String(num).split('').reverse()
    let res = ''

    for (let v of chars) {
        let [oneR, fiveR, oneTen] = RomanPairs.pop()
        res = bitRomanTransform(oneR, fiveR, oneTen, parseInt(v)) + res
    }

    return res
};

const testIntToRoman = intToRoman(19)
assert.ok(testIntToRoman, 'XIX')