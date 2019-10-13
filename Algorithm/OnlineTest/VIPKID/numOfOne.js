var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line',(line) => {
  const num = parseInt(line);
  let res = helper(num);
  console.log(res);
})

var helper = function(num) {
  let base = 1;
  let count = 0;
  while(num!==0) {
    if(num%2===0) {
      num = num / 2;
    } else {
      count++;
      num = (num-1) / 2;
    }
  }
  return count;
}