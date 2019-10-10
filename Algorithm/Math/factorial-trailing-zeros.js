/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  if (n < 5) {
    return 0;
  }
  let res = 0;
  const fiveLength = n / 5;
  for(let i=1; i<=fiveLength; i++) {
    let value = i;
    let step = 1;
    while(value >= 5 && value%5===0) {
      value = value / 5;
      step++;
    }
    res += step;
  }
  return res;
};
console.log(trailingZeroes(1808548329));