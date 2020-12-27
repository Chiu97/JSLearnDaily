function intervalIntersection(A: number[][], B: number[][]): number[][] {
    let pA=0,
        pB=0
    const sA = A.length,
          sB = B.length

    let res = []

    const computedIntersection = (intervalA: number[], intervalB: number[]): void => {
        const [lA, rA] = intervalA
        const [lB, rB] = intervalB
        let next: number[]

        if (lA>rB||lB>rA) return

        if (rA<rB) {
            if (lA>lB) next = [lA, rA]
            else next = [lB, rA]
        } else {
            if (lB>lA) next = [lB, rB]
            else next = [lA, rB]
        }

        if (next) res.push(next)

    }
          
    while (pA<sA&&pB<sB) {
        const intervalA = A[pA]
        const intervalB = B[pB]

        computedIntersection(intervalA, intervalB)
        if (intervalA[1]>intervalB[1]) pB++
        else pA++
    }

    return res
};


const A = [[0,2],[5,10],[13,23],[24,25]]
const B =[[1,5],[8,12],[15,24],[25,26]]
const output = intervalIntersection(A, B)
const expected = [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]
const assert = require('assert')
assert.deepEqual(output, expected, 'Should output same array')

export {}