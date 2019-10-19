class Target {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log(this.name);
  }
  logHello(hello,end) {
    console.log(`${hello},${this.name}.${end}.`);
  }
}

let test = new Target('chiu');
Function.prototype.myBind = function(context,...args1) {
  let fn = this;
  return function(...args2) {
    const args = args1.concat(args2);
    fn.apply(context,args);
  }
}

/* let pureBind = test.logHello.bind({name:'jeff'},'hello');
pureBind(); */

/* let testBind = test.logHello.myBind({name:'jeff'},'hello');
testBind(); */