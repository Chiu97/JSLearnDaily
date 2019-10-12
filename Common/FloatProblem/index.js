// number type
console.log(0.1+0.2);

// custom cal
let add = function(num1, num2) {
  let n1 = num1.toString().split('.');
  let n2 = num2.toString().split('.');
  if(n1.length===2&&n2.length===2) {
    let needPlusOne = 0;
    let fracLen = Math.max(n1[1].length,n2[1].length);
    let fracSum = parseInt(n1[1]) + parseInt(n2[1]);
    if(fracSum.toString().length>fracLen) {
      needPlusOne = 1;
      fracSum = parseInt(fracSum.toString().slice(1));
    }
    let intSum = parseInt(n1[0]) + parseInt(n2[0]) + needPlusOne;
    let res = intSum + '.' + fracSum;
    return parseFloat(res);
  }
  return num1 + num2;
} 
let res = add(5,6);
console.log('res:' + res);
// bigint type
// console.log(typeof 42n);