
function deepclone(originObj) {
  if(originObj===null || typeof originObj!=='object') {
    return originObj;
  }
  let cloneObj = new originObj.constructor();
  for(let key in originObj) {
    cloneObj[key] = deepclone(originObj[key]);
  }
  return cloneObj;
}

module.exports = {
  deepClone: deepclone
}

/* class Create {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
} */

/* let obj = {
  a: 1,
  b: {
    c: 3
  },
  d: add
} */

// let c = new Create('chiu');

/* function add(a,b) {
  return a + b;
} */

/* 
let copy = deepclone(obj);
console.log(copy); */
/* let copy = deepclone(c);
copy.getName(); */