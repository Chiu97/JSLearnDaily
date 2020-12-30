function combine(n: number, k: number): number[][] {
    let res = []
    if (k===0||k>n) return res

    function backtracking (preAppend: number[], rest: number[]) {
        if (preAppend.length===k) {
            res.push(preAppend)
            return
        }

        while (rest.length) {
            const cv = rest.shift()
            
            backtracking([...preAppend, cv], [...rest])
        }
    }

    const initRest = Array.from({length: n}, (_, k) => k+1)
    backtracking([], initRest)
    return res
};

const n = 4
const k = 2
const res = combine(n, k)
const expect = [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
const assert = require('assert')
assert.deepEqual(res, expect)
export {}