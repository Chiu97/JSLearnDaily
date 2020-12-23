function __addOnce (){
    return function (target) {
        target.onceFunction = () => {
            console.log('hahaha')
        }
    }
}

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
}

@__addOnce()
@classDecorator
class T {
    once: boolean
    onceFunction: Function
    hello: String
}


const ti = new T()
console.log(ti.hello)