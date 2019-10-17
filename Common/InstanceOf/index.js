var myInstanceOf = function(child, fn) {
  if(typeof fn !== 'function') {
    throw new TypeError('fn is not a function');
  }
  if(child===null) {
    return false;
  }
  if(child.__proto__===fn.prototype) {
    return true;
  } else {
    return myInstanceOf(child.__proto__,fn);
}