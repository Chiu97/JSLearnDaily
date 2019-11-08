/**
 * @param {number[]} nums
 * @return {number[][]}
 */

//1 2 3 4

var permute = function(nums) {
    let res = [];
    if(nums.length===1) {
        return [nums];
    }
    if(nums.length===2) {
        return [[nums[0], nums[1]], [nums[1], nums[0]]];
    } else {
        nums.forEach((v, i) => {
            let arrs = combine(v, permute(nums.slice(0,i).concat(nums.slice(i+1))));
            arrs.forEach(arr => {
                res.push(arr);
            });
        });
        return res;
    }
};

function combine(v, arrs) {
    arrs.forEach(arr => {
        arr.unshift(v);
    });
    return arrs;
}

const test = [1,2,3];
const res = permute(test);
console.log(res);