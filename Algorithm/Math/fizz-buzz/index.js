/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let num = 1;
  let res = [];
  while(num<=n) {
    let str = '';
    if(num%3===0) {
      str += 'Fizz';
    }
    if(num%5===0) {
      str += 'Buzz';
    }
    if(num%3!=0&&num%5!=0) {
      str += num;
    }
    res.push(str);
    num++;
  }
  return res;
};

const res = fizzBuzz(15);
console.log(res);