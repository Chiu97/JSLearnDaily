/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
    const ROW_ZERO = 0b010
    const COLUMN_ZERO = 0b100

    const m = matrix.length
    if (m===0) return
    const n = matrix[0].length
    if (!n) return
    const preservedFirstEl = matrix[0][0]
    matrix[0][0] = 0

    if (preservedFirstEl===0) {
        matrix[0][0] = ROW_ZERO|COLUMN_ZERO
    } else {
        for (let i=1; i<m; i++) {
            if (matrix[i][0]===0) matrix[0][0] |= COLUMN_ZERO
        }
    
        for (let i=1; i<n; i++) {
            if (matrix[0][i]===0) matrix[0][0] |= ROW_ZERO
        }
    }

    for (let i=1; i<m; i++) {
        for (let j=1; j<n; j++) {
            if (matrix[i][j]===0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }

    for (let i=1; i<m; i++) {
        for (let j=1; j<n; j++) {
            if (matrix[i][0]===0||matrix[0][j]===0) matrix[i][j] = 0
        }
    }

    for (let i=1; i<m; i++) {
        if ((matrix[0][0]&COLUMN_ZERO) !== 0) matrix[i][0] = 0
    }

    for (let i=1; i<n; i++) {
        if ((matrix[0][0]&ROW_ZERO)!==0) matrix[0][i] = 0
    }

    if ((matrix[0][0]&ROW_ZERO)===0 && (matrix[0][0]&COLUMN_ZERO)===0) matrix[0][0] = preservedFirstEl
    else matrix[0][0] = 0
}

const matrix = [[-1],[2],[3]]
setZeroes(matrix)
console.log(matrix)
