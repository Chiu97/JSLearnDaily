/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let map = new Map();
    let sum = 0;
    let sumArr = [];
    let count = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        sumArr[i] = sum;
        if(map.has(sum)) {
            let temp = map.get(sum);
            temp.push(i);
            map.set(sum,temp);
        } else {
            map.set(sum,[i]);
        }
    }
    nums.forEach((value, i) => {
        const curSum = sumArr[i];
        const needSum = curSum + k;
        if(map.has(needSum)) {
            let itemLength = map.get(needSum);
            count += itemLength;
        }
    });
    return count;
};