function sortFun (arr) {
  let map = new Map();
  let res = [];
  arr.forEach(item => {
    if(map.has(item)) {
      map.set(item,map.get(item)+1);
    } else {
      map.set(item,1);
    }
  });
  let reverse = new Map();
  let mapArr = [];
  for(let item of map.entries()) {
    let temp = [];
    if(reverse.has(item[1])) {
      temp = reverse.get(item[1]);
      temp.push(item[0]);
    } else {
      temp.push(item[0]);
      reverse.set(item[1],temp);
      mapArr.push(item[1]);
    }
  }
  let sortedCount = mapArr.sort().reverse();
  sortedCount.forEach(count => {
    reverse.get(count).forEach( item => {
      res.push(item);
    });
  });
  return res;
}

let map = new Map();
map.set(3,5)
map.set(1,4);
map.set(2,6);

// sortFun([1,3,5,2,1,1,3,2]);
let res = sortFun([1,2,5,1,6,2,2]);
console.log(res);
