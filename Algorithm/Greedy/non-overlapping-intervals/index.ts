function eraseOverlapIntervals(intervals: number[][]): number {
    if (!intervals.length) return 0
    const comparer = (a: number[], b: number[]) => {
        return a[1] - b[1]
    }
    intervals.sort(comparer)

    let prev = intervals[0][1]
    let total = 0

    for (let i=1; i<intervals.length; i++) {
        if (intervals[i][0]<prev) {
            total++
        } else {
            prev = intervals[i][1]
        }
    }

    return total
};

const input = [[1,2],[2,3],[3,4],[-100,-2],[5,7]]
const output = eraseOverlapIntervals(input)
console.log(output)
export {}