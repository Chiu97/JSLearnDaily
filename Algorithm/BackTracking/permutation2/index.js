/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var sz = nums.length
    nums.sort((a, b) => a - b)
    const res = []
    /**
     * @param {any[]} arr
     * @param {number} idx
     */
    function pureDelete(arr, idx) {
        const res = [...arr]
        res.splice(idx, 1)
        return res
    }

    function backTracking(preAcc, nums) {
        if (preAcc.length === sz) {
            res.push(preAcc)
            return
        }
        backTracking([...preAcc, nums[0]], pureDelete(nums, 0))
        for (let i=1; i<nums.length; i++) {
            if (nums[i]!==nums[i-1]) {
                backTracking([...preAcc, nums[i]], pureDelete(nums, i))
            }
        }
    }

    backTracking([], nums)
    return res
};