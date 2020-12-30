function lastStoneWeight(stones: number[]): number {
    const len = stones.length
    if (!len) return 0

    const comparer = (a: number, b: number) => a - b
    stones.sort(comparer)

    function pushBack (num: number) {
        let helperStack = []
        while (stones.length) {
            if (num<stones[stones.length-1]) {
                helperStack.push(stones.pop())
            } else {
                break
            }
        }
        stones.push(num)

        while (helperStack.length) {
            stones.push(helperStack.pop())
        }
    }


    while (stones.length) {
        if (stones.length===1) return stones[0]
        let biggest = stones.pop()
        let lessBiggest = stones.pop()
        if (biggest===lessBiggest) continue
        let diff = biggest - lessBiggest
        pushBack(diff)
    }

    return 0
};

const input = [1,3]
const output = lastStoneWeight(input)
const expectOutput = 2
console.log(output)

export {}