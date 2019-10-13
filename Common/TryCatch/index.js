function tryCatch() {
  try {
    console.log('try');
    return 1;
  } catch(e) {
    console.log('error:' + e);
  } finally {
    console.log('finally');
    return 2;
  }
}
console.log(tryCatch());