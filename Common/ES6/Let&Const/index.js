var a = 1;
function f1() {
  console.log(a);
  const a = 2;
  console.log(a);
  return a;
}
function f2() {
  console.log(a);
}
f1();  //  ReferenceError: a is not defined
f2();
console.log(a)