/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 * leetcode 1001
 */

 // 首先要确保出现的次数大于或等于数组的长度
var minDominoRotations = function(A, B) {

    if(A.length<=1) {
        return 0;
    }
    let minLen = A.length;
    let totalMap = new Map();
    let setArr = [];

    for(let i=0; i<A.length; i++) {
        if(totalMap.has(A[i])) {
            let itemSet = totalMap.get(A[i]);
            itemSet.add(i);
            if(itemSet.size===minLen) {
                setArr.push(A[i]);
            }
        } else {
            let itemSet = new Set();
            itemSet.add(i);
            totalMap.set(A[i], itemSet);
        }
        if(totalMap.has(B[i])) {
            let itemSet = totalMap.get(B[i]);
            itemSet.add(i);
            if(itemSet.size===minLen) {
                setArr.push(B[i]);
            }
        } else {
            let itemSet = new Set();
            itemSet.add(i);
            totalMap.set(B[i], itemSet);
        }
    }

    if(setArr.length===0) {
        return -1;
    }

    let minRotate;
    setArr.forEach(v => {
        let ra = 0;
        let rb = 0;
        for (let i=0; i<A.length; i++) {
            if(A[i]!==v) {
                ra++;
            }
            if(B[i]!==v) {
                rb++;
            }
        }
        if(minRotate===undefined) {
            minRotate = ra < rb ? ra : rb;
        } else {
            let minAB = ra < rb ? ra : rb;
            minRotate = minAB < minRotate ? minAB : minRotate;
        }
    });
    return minRotate;
};

const A = [2,1,1,1,2,2,2,1,1,2];
const B = [1,1,2,1,1,1,1,2,1,1];
console.log(minDominoRotations(A, B));