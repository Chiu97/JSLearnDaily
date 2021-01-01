function advantageCount(A: number[], B: number[]): number[] {
    if (!A.length) return []
    const sortedA = [...A].sort((a, b) => a -b)
    const attachIdxB = B.map((v, i) => {
        return {
            val: v,
            index: i
        }
    })
    attachIdxB.sort((a, b) => a.val - b.val)

    var i=0,
        j=0

    let pick: {val: number, index: number}[] = []
    let useless: number[] = []
    
    while (i<sortedA.length && j<attachIdxB.length) {
        if (sortedA[i]>attachIdxB[j].val) {
            pick.push({
                val: sortedA[i],
                index: attachIdxB[j].index
            })
            j++
        } else {
            useless.push(sortedA[i])
        }
        i++
    }

    let res: number[] = Array.from({length: A.length}, () => null)
    pick.forEach(item => {
        res[item.index] = item.val
    })
    for (let i=0; i<A.length; i++) {
        if (res[i]===null) res[i] = useless.pop()
    }

    return res
};

const A = [12,24,8,32]
const B = [13,25,32,11]
const output = advantageCount(A, B)
console.log(output)

export {}