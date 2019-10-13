var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let ip = []
rl.on('line',function(line) {
  ip.push(line.trim());
});