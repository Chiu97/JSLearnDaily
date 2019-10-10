function* generate() {
  yield 1;
  console.log('yield 1');
  yield 2;
  console.log('yield 2');
  return 3;
}

const acceptor = generate();
console.log(acceptor.next());
console.log(acceptor.next());
console.log(acceptor.next());