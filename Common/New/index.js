var myNew = function(cons,...args) {
  if(typeof cons !== 'function') {
    throw new TypeError('arg2 fun is not a function')
  }
  let newObj = {};
  // newObj.__proto__ = cons.prototype;
  Object.setPrototypeOf(newObj, cons.prototype);
  let res = cons.call(newObj,args);
  return typeof res==='object' ? res : newObj;
}