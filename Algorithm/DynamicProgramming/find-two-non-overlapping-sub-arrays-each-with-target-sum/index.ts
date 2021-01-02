function minSumOfLengths(arr: number[], target: number): number {
    if (!arr.length) return -1
    let candiates: number[][] = []

    let left=0,
        right=0,
        sum=0;
    
    while (right<arr.length) {
        sum += arr[right++]
        if (sum<target) continue
        else if (sum>target) {
            while (sum > target) {
                sum -= arr[left++]
            }
        }
        if (sum===target) {
            candiates.push([left, right])
        }
    }
    
    candiates.sort((a, b) => {
        const lenA = a[1] - a[0]
        const lenB = b[1] - b[0]
        return lenA - lenB
    })

    for (let i=1; i<candiates.length; i++) {
        const cur = candiates[i]
        for (let j=0; j<i; j++) {
            const prev = candiates[j]
            if ((prev[1] <= cur[0]) || (prev[0] >= cur[1])) {
                return prev[1] + cur[1] - prev[0] - cur[0]
            }
        }
    }

    return -1
};

const input = [2,2,4,4,4,4,4,1,1,1,1,1]
const output = minSumOfLengths(input, 12)
console.log(output)
export {}