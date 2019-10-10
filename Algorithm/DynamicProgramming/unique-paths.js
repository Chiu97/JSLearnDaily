/* var uniquePaths = function(m, n) {
  if (m>1 && n>1) {
    return uniquePaths(m-1,n) + uniquePaths(m,n-1);
  } else if (m === 1 || n === 1) {
    return 1;
  }
}; */
var uniquePaths = function(m, n) {
  let arr = Array.from({length:m},() => Array.from({length:n}));
  for(let i=0; i<m; i++) {
    arr[i][0] = 1;
  }
  for(let i=0; i<n; i++) {
    arr[0][i] = 1;
  }
  for(let i=1; i<m; i++) {
    for(let j=1; j<n; j++) {
      arr[i][j] = arr[i-1][j] + arr[i][j-1];
    }
  }
  return arr[m-1][n-1];
};

console.log(uniquePaths(7,3));