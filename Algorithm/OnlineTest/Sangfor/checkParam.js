let url = 'http://www.google.com/?q=sangfor&o=shfd&sd=123';
let test = url.split('?')[1].toString().split('&');
console.log(test);
let res = false;
test.forEach(item => {
  if(item.includes('sangfor=')) {
    res = true;
  }
});
console.log(res);
