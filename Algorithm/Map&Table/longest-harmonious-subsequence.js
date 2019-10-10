/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
  if(nums.length===0) {
    return 0;
  }
  let map = new Map();
  for(let num of nums) {
    if(!map.has(num)){
      map.set(num,1);
    } else {
      map.set(num,map.get(num)+1);
    }
  }
  let max = 0;
  for(let num of map) {
    if(map.has(num[0]+1)) {
      let len = num[1] + map.get(num[0]+1);
      max = Math.max(len, max);
    }
  }
  return max;
};

let arr = [1,3,2,2,5,2,3,7];
let res = findLHS(arr);
console.log(res);