var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line',function(line) {
  var lineArr = line.split(',');
  let inputArr = lineArr.map((value,index) => {
    return parseInt(value);
  });
  let sorted = inputArr.sort(function(a,b) {
    return a <= b ? -1 : 1;
  });
  const res = helper(sorted);
  console.log(res);
});
// 双指针
let helper = function(arr) {
  let count = 0;
  let i = 0;
  let j = arr.length-1;
  while(i<arr.length-1&&i<j) {
    if(arr[i]===arr[i+1]&&i+1!==j) {
      i++;
    } else if (arr[j]===arr[j-1]&&j!==i) {
      j--;
    } else {
      if(arr[i] + arr[j] > 0) {
        j--;
      } else if(arr[i] + arr[j] < 0) {
        i++;
      } else {
        count++;
        i++;
        j--;
      }
    }
  }
  return count;
}