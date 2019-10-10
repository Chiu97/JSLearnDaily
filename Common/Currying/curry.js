function curry(func) {
  return function curried(...args) {
    if(args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

function sum(a,b) {
  return a + b;
}

let curriedSum = curry(sum);
let curriedSum4 = curriedSum(4);
console.log(curriedSum(1,1));
console.log(curriedSum4(5));