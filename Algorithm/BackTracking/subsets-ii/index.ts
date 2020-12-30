function subsetsWithDup(nums: number[]): number[][] {
    const comparer = (a: number, b: number) => a - b
    nums.sort(comparer)
    let res: number[][] = [[]]

    function backtracking(preArr: number[], rest: number[]): void {
        if (!rest.length) return
        let prev: number

        while (rest.length) {
            var cv = rest.shift()

            if (cv === prev) continue
            prev = cv

            var nextIter = [...preArr, cv]
            res.push(nextIter)
            backtracking(nextIter, [...rest])
        }
    }

    backtracking([], nums)

    return res
};

const input = [4,4,4,1,4]
const output = subsetsWithDup(input)
console.log(output)

export {}