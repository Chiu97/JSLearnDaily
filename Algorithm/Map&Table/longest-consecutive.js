/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set = new Set();
  let longest = 0;
  for(let num of nums) {
    set.add(num);
  }
  for(let num of set) {
    if(!set.has(num-1)) {
      let cur = num;
      let len = 1;
      while(set.has(++num)) {
        len++;
      }
      longest = Math.max(longest, len);
    }
  }
  return longest;
};

/* let set = new Set();
set.add(1);
set.add(4);
set.add(6);
set.add(3);
set.add(4);
console.log(set); */
let arr = [4,32,1,6,5,4,23,5];
let res = longestConsecutive(arr);
console.log(res);