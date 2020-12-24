/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    /**
     * @type {number[][]}
     */
    let res = []
    candidates.sort((a, b) => a - b)
    function createSameElArray (len, el) {
        let res = []
        for (let i=0; i<len; i++) res.push(el)
        return res
    }
    /**
     * @param {number} startIdx
     * @param {number} rest
     * @param {number[]} preAcc
     */
    function track (startIdx, rest, preAcc) {
        if (rest<0) return
        if (rest === 0) {
            res.push(preAcc)
            return
        }
        for (let i=startIdx; i<candidates.length; i++) {
            const currentVal = candidates[i]
            if (currentVal===rest) {
                res.push([...preAcc, currentVal])
                break
            }
            if (currentVal>rest) {
                break
            }
            const newRest = rest - currentVal
            let curIdx = i
            let extraIdx = 1
            while (candidates[curIdx+extraIdx]===currentVal) {
                extraIdx++
            }

            for (let i=1; i<=extraIdx; i++) {
                track(curIdx+extraIdx, rest - currentVal*i, [...preAcc, ...createSameElArray(i, currentVal)])
            }

            i += extraIdx-1
        }
    }

    track(0, target, [])
    return res
};