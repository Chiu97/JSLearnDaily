/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
/*
*   koko可以控制吃香蕉的速度(K根每秒)
*   koko假如一小时内吃完一堆香蕉,那么她在这一小时的剩余时间都不会再吃香蕉
*   求N小时内吃完的最小K值
*/
var minEatingSpeed = function(piles, H) {
    if(piles.length===0) {
        return 0;
    }
    if(piles.length===1) {
        return Math.ceil(piles[0]/H);
    }

    let max = piles[0];
    let min = piles[0];
    
    // 求出各堆香蕉最大值和最小值
    for(let i=0; i<piles.length; i++) {
        if(piles[i]>max) {
            max = piles[i];
        }
        if(piles[i]<min) {
            min = piles[i];
        }
    }

    let minK = max;
    binarySearch(0,minK);
    return minK;

    function binarySearch(left, right) {
        if(left+1>=right) {
            return;
        }
        const k = Math.ceil((left+right)/2);
        let time = 0;
        piles.forEach(bananas => {
            time += Math.ceil(bananas/k);
        });
        // console.log(left,right,time);
        if(time<=H) {
            if(k<minK) {
                minK = k;
            }
            binarySearch(left,k);
        } else {
            binarySearch(k,right);
        }
    }
};

const piles = [30,11,23,4,20];
const H = 6;
const res = minEatingSpeed(piles, H);
console.log(res);