/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let set = new Set();
  function exec(n) {
    try{
      let nArr = splitNumber(n);
      let sum = 0;
      nArr.forEach(item => sum += item*item);
      if(sum===1) {
        return true;
      } else {
        if(set.has(sum)) {
          return false;
        }
        set.add(sum);
        return exec(sum);
      }
    } catch(err) {
      return false;
    }
  }

  return exec(n);

  function splitNumber(num) {
    let res = [];
    let numStr = num.toString();
    for(let i=0; i<numStr.length; i++) {
      res.push(parseInt(numStr.charAt(i)));
    }
    return res;
  }
};



let n = 83;
let res = isHappy(n);
console.log(res);

module.exports = {}