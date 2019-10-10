var testArguments = function (...args) {
  console.log(arguments);
  console.log(arguments.length);
  // TypeError: arguments.shift is not a function
  // arguments.shift();   
  console.log(arguments.constructor);
  console.log([].constructor);
  let argsArr = [].slice.call(arguments);
  argsArr.push(4);
  console.log(argsArr);
}


// testArguments(1,2,3);

const convertToArray = function(objlike)  {
  return Array.prototype.slice.call(objlike);
}

module.exports.getArray = convertToArray;