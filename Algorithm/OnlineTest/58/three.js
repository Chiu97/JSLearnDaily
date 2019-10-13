function funInclude (arr1, arr2,arr3) {
  let set1 = new Set(arr1);
  let commonSet = new Set();
  arr2.forEach( item => {
    if(set1.has(item)) {
      commonSet.add(item);
    }
  });
  arr3.forEach(item => {
    if(commonSet.has(item)) {
      commonSet.delete(item);
    }
  });
  let res = '';
  commonSet.forEach(item => {
    res = res + item + ',';
  });
  if(commonSet.length===0) {
    console.log('');
    return;
  }
  res = res.slice(0,res.length-1);
  console.log(res);
}

let arr1 = ['f',3,4,'k'];
let arr2 = [4,1,'k',3];
let arr3 = ['j',2,'k'];
funInclude(arr1, arr2, arr3);