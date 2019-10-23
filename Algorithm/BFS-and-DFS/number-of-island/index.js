/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let flag = 0;
  grid.forEach((row,x) => {
    row.forEach((item,y) => {
      if(item==='1') {
        flag++;
        item = flag;
        findNeighbor([x,y],flag);
      }
    });
  });

  return flag;

  function findNeighbor(coordinate,flag) {
    const x = coordinate[0];
    const y = coordinate[1];
    if(x!==0&&grid[x-1][y]==='1') {
      grid[x-1][y] = flag;
      findNeighbor([x-1,y],flag);
    }
    if(y!==0&&grid[x][y-1]==='1') {
      grid[x][y-1] = flag;
      findNeighbor([x,y-1],flag);
    }
    if(x+1<grid.length&&grid[x+1][y]==='1') {
      grid[x+1][y] = flag;
      findNeighbor([x+1,y],flag);
    }
    if(y+1<grid[0].length&&grid[x][y+1]==='1') {
      grid[x][y+1] = flag;
      findNeighbor([x,y+1],flag);
    }
  }
};

const grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]];
const res = numIslands(grid);
console.log(res);