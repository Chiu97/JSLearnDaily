const convertIndex = require('./index');
const convert = convertIndex.getArray;
let obj = {
  a:1,
  b:2,
  c:function(d,e) {
    return d+e;
  }
}
let arr = convert(obj);
console.log(arr);