const assert = require('assert')

function findContentChildren(g: number[], s: number[]): number {
    const numberComparable = (a: number, b: number) => a-b
    g.sort(numberComparable)
    s.sort(numberComparable)
    let len = 0
    let gIdx = 0

    for (let i=0; i<s.length; i++) {
        const cookieWanted = s[i]
        if (s[s.length-1]<cookieWanted||gIdx>=s.length) return len
        for (let j=gIdx; j<g.length; j++) {
            if (g[j] <= cookieWanted) {
                len++
                gIdx++
                break
            }
        }
    }

    return len
};


const testCase = [
    [1,2],
    [1,2,3]
]

const actualOutput = findContentChildren(testCase[0], testCase[1])
assert.equal(actualOutput, 2, 'It shoud returns the right children number')