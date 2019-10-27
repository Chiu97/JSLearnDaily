/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

 /*
 *  rules: 
 *      1.活细胞周围如果活细胞数量少于2则死亡  
 *      2.死细胞周围如果活细胞数量为3则复活
 *      3.活细胞周围如果活细胞数量大于3则死亡
 *      4.活细胞周围如果活细胞数量为2或者3则继续存活
 */

 // 约定活细胞继续存活为1
 // 死细胞复活为2
 // 活细胞死亡为-1
var gameOfLife = function(board) {
    const row = board.length;
    const col = board[0].length;
    for(let r=0; r<row; r++) {
        for(let c=0; c<col; c++) {
            board[r][c] = getNewStatus(r,c);
        }
    }

    for(let r=0; r<row; r++) {
        for(let c=0; c<col; c++) {
            if(board[r][c]===-1) {
                board[r][c] = 0;
            }
            if(board[r][c]===2) {
                board[r][c] = 1;
            }
        }
    }

    return board;

    // 更新点的状态  
    function getNewStatus(x,y) {
        if(board[x][y]===1) {
            const nearLiveCells = getLiveCellNum(x,y);
            if(nearLiveCells===2||nearLiveCells===3) {
                return 1;
            } else {
                return -1;
            }
        }
        if(board[x][y]===0) {
            const nearLiveCells = getLiveCellNum(x,y);
            if(nearLiveCells===3) {
                return 2;
            } else {
                return 0;
            }
        }
    }
    
    // 获取活细胞周围活细胞的数量
    function getLiveCellNum(x,y) {
        return (
        checkLive(x-1,y-1) + checkLive(x-1,y) + checkLive(x-1,y+1)
        + checkLive(x,y-1) + checkLive(x,y+1) 
        + checkLive(x+1,y-1) + checkLive(x+1,y) + checkLive(x+1,y+1)
        );
    }

    // 检查该点当前状态是否为活细胞(假如不存在该点就把该点当作死细胞)
    function checkLive(x,y) {
        if(x<0||y<0||x>board.length-1||y>board[0].length-1) {
            return 0;
        }
        if(board[x][y]===1||board[x][y]===-1) {
            return 1;
        }
        return 0;
    }
};

let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
console.log(gameOfLife(board));

// 0   -1  0
// 0   0   1
// 1   1   1
// 0   0   0
