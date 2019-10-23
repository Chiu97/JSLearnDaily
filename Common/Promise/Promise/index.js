class MyPromise {
  constructor(func,state,value) {
    this.state = state || 'pending';
    this.value = value || null;
    func(this.resolve,this.reject);
  }

  then(func) {
    if(this.state === 'rejected') {
      return;
    }
    this.onFulfill = function(func) {
      func(this.value);
      return new MyPromise(()=>{},'resolve',this.value);
    }
  }

  resolve(value) {
    if(this.state !== 'pending') {
      return;
    }
    this.state = 'fulfilled';
    this.value = value;
  }

  reject(err) {
    if(this.state !== 'pending') {
      return;
    }
    this.state = 'rejectd';
    this.value = err;
    throw new Error(err);
  }
}

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {resolve('hey')},1000);
})

promise.then((data) => {
  console.log(data);
});
