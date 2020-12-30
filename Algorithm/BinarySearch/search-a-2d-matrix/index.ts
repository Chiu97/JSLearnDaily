function searchMatrix(matrix: number[][], target: number): boolean {
    let limit = 30
    const m = matrix.length
    if (m === 0) return false
    const n =matrix[0].length

    function binarySearch(arr: number[], start: number, end: number) {
        if (limit--<0) return false
        if (end-start<2) {
            if (arr[start]===target||arr[end]===target) return true
            return false
        }
        const mid = start + Math.floor((end-start)/2)
        if (arr[mid]<target) {
            return binarySearch(arr, mid+1, end)
        } else {
            return binarySearch(arr, start, mid)
        }
    }

    for (let i=0; i<m; i++) {
        if (matrix[i][0]>target) return false
        if (matrix[i][n-1]<target) continue

        if (binarySearch(matrix[i], 0, n-1)) return true
    }

    return false
};

const matrix = [[-9,-7,-5,-4,-4,-2],[-1,-1,-1,-1,-1,1],[2,2,4,4,5,7],[10,10,12,12,12,12],[15,16,18,18,20,20]]
const target = 18
const output = searchMatrix(matrix, target)
console.log(output)

export {}