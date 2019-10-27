/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===0) {
        return 0;
    }
    if(nums.length<=2) {
        return Math.max(...nums);
    }

    const dp = new Array(nums.length);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    
    for(let i=2; i<nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i]);
    }

    return dp[nums.length-1];
};

const nums = [114,117,207,117,235,82,90,67,143,146,53,108,200,91,80,223,58,170,110,236,81,90,222,160,165,195,187,199,114,235,197,187,69,129,64,214,228,78,188,67,205,94,205,169,241,202,144,240];
console.log(rob(nums));