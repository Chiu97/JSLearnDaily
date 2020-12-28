function totalFruit(tree: number[]): number {
    const len = tree.length
    if (len === 0) return 0
    let i = 0

    let prev = 0

    while (i<len&&tree[i]===tree[prev]) {
        i++
    }
    if (i===len) return len

    let sum = i+1
    let post = i
    let max = sum
    i++
    debugger
    for(;i<len;i++) {
        const prevVal = tree[prev]
        const postVal = tree[post]
        const curVal = tree[i]

        if (curVal===prevVal) {
            sum++
            prev = post
            post = i
        } else if (curVal===postVal) {
            sum++
        } else {
            prev = post
            post = i      
            sum = post - prev + 1      
        }
        if (sum>max) max = sum
        debugger
    }

    return max
};


const testCase = [3,3,3,1,2,1,1,2,3,3,4]
const output = totalFruit(testCase)
console.log(output)

export {}