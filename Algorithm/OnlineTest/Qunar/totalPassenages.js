var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line',function(line) {
    let inputAdult = parseInt(line.split(',')[0]);
    let inputChild = parseInt(line.split(',')[1]);
    if(inputAdult + inputChild > 9 || inputAdult < 1 || inputChild > inputAdult * 2) {
        console.log('选择不合法');
    }
    let restAdult = 9 - inputChild;
    let minAdult = (inputChild + 1) / 2;
    let mostChild = Math.min(inputAdult*2,9 - inputAdult);
    let adultStr = '';
    let childStr = '';
    for(let i=minAdult; i<=restAdult; i++) {
        adultStr += i;
    }
    for(let i=0; i<=mostChild; i++) {
        childStr += i;
    }
    adultStr = adultStr.split('').join(',');
    childStr = childStr.split('').join(',');
    console.log(adultStr + '\n' + childStr);
});