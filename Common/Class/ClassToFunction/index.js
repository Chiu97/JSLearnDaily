// 将类转化成一个等价的构造函数

class Person1 {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    console.log(this.name)
  }
}

let Person2 = (function () {
  "use strict";

  const Person = function(name) {
    if(typeof new.target === 'undefined') {
      throw new Error('Constructor must be invoked with new');
    }
    this.name = name;
  }  
  Object.defineProperty(Person.prototype,'sayName',{
    value: function() {
      if(typeof new.target !== 'undefined') {
        throw new Error('Method cannot be invoked with new');
      }
      console.log(this.name);
    },
    enumerable: false,
    writable: true,
    configurable: true,
  });
  return Person;
})()