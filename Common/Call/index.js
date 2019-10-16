Function.prototype.myCall = function(context,...args) {
  context.fn = this;
  console.log('this:' + this);
  let res = context.fn(...args);
  delete context.fn;
  return res;
}

function test(name) {
  console.log(this);
  this.name = name;
  console.log('name:' + this.name + ',hell:' + this.hell);
  console.log('great');
}

// test.myCall({hell:'chiu'},'colin');
// test();

{
  function test1(){
    console.log(this===global); //true
  }
  function test2() {
    'use strict';
    console.log(this===undefined); // true
  }
  test1();
  test2();
}

{
  let obj = {
    test1: function() {
      console.log(this===obj); // true
    }
  }
  obj.test1();
}

