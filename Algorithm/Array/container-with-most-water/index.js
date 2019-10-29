/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let curL = 0;
    let left = 0;
    let curR = height.length - 1;
    let right = height.length - 1;
    let minHeight = height[curL] > height[curR] ? height[curR] : height[curL];
    let curCapacity = minHeight * (curR - curL);

    while(left < right) {
        if(height[left] > height[right]) {
            right--;
            let min = height[left] > height[right] ? height[right] : height[left];
            curCapacity = min*(right-left) > curCapacity ? min*(right-left) : curCapacity;
        } else {
            left++;
            let min = height[left] > height[right] ? height[right] : height[left];
            curCapacity = min*(right-left) > curCapacity ? min*(right-left) : curCapacity;
        }
    }
    return curCapacity;
};

const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));