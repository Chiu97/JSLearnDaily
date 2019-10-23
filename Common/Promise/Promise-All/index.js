const all = function(promises) {
  const len = promises.length;
  let count = 0;
  console.log('len:' + len);
  let resolveArr = [];
  promises.forEach((promise, i) => {
    promise.then((data) => {
      resolveArr[i] = data;
      count++;
      if(count===len) {
        return Promise.resolve(resolveArr);
      }
    }).catch((err) => {
      return Promise.reject(err);
    })
  });
}

const promise1 = new Promise((resolve,reject) => {
  setTimeout(()=>{
    resolve(1);
  },1000);
});

const promise2 = new Promise((resolve,reject) => {
  setTimeout(()=>{
    resolve(2)
  },500)
});

const promise3 = new Promise((resolve,reject) => {
  setTimeout(()=>{
    reject('hey');
  },2000);
});

all([promise1,promise2,promise3])
/* .then((data) => {
  console.log('data:' + data);
})
.catch(err => {
  console.log(err);
}) */