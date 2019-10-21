/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const {Heap} = require('heap-js');

let test = [[2,3],[1,4],[6,1],[3,5],[1,2]];
// 13 , 17, 37, 34

const comparator = (num1,num2) => {
  if(num1 === undefined || num2 === undefined) {
    return 0;
  }
  return num2[0] - num1[0];
}

let heap = new Heap(comparator);

/* test.forEach(item => {
  heap.push(item);
});
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop());
console.log(heap.pop()); */

var kClosest = function(points, K) {
    let res = [];
    if(K>points.length) {
      throw new Error('K length should not be greate than points length');
    }
    points.forEach((item, i) => {
      const distance = item[0]*item[0] + item[1]*item[1];
      if(heap.length<K) {
        heap.push([distance,i]);
      } else {
        const top = heap.peek()[0];
        if(distance<top) {
          heap.pop();
          heap.push([distance,i]);
        }
      }
    });
    for(let i=0; i<K; i++) {
      res.unshift(points[heap.pop()[1]]);
    }
    console.log(res);
};

kClosest(test, 2);