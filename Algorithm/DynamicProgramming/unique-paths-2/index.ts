const create2DArray = (m: number, n: number, initialVal=0) => {
    let res: number[][] = []
    for (let i=0; i<m; i++) {
        res.push([])
        for (let j=0; j<n; j++) {
            res[i][j] = initialVal
        }
    }

    return res
}

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    if (obstacleGrid.length === 0) return 0
    const m = obstacleGrid.length
    const n = obstacleGrid[0].length

    let dp: number[][] = create2DArray(m, n)
    dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1
    if (dp[0][0]===0) return 0
    const getTopPaths = (i, j) => {
        if (i===0||obstacleGrid[i-1][j]===1) return 0
        return dp[i-1][j]
    }
    const getLeftPaths = (i, j) => {
        if (j===0||obstacleGrid[i][j-1]===1) return 0
        return dp[i][j-1]
    }
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (dp[i][j]) continue
            if (obstacleGrid[i][j]===1) {
                dp[i][j] = 0
                continue
            }
            dp[i][j] = getTopPaths(i, j) + getLeftPaths(i, j)
        }
    }

    return dp[m-1][n-1]
};

const obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
const expectedOutput = 2
const testResult = uniquePathsWithObstacles(obstacleGrid)
const assert = require('assert')
assert.equal(testResult, expectedOutput, 'The output should be same')