const states = {
    fulfilled: 'fulfilled',
    rejected: 'rejected',
    pending: 'pending',
};

class MyPromise {
    constructor(executor) {
        this.state = states.pending;
        this.value = undefined;
        this.waitResolveCallback = [];
        const resolve = data => {
            if(this.state!==states.pending) return;
            this.state = states.fulfilled;
            this.value = data;
            if(this.waitResolveCallback.length>0) {
                this.waitResolveCallback.forEach(fn => fn());
            }
        }
        const reject = reason => {
            if(this.state!==states.pending) return;
            this.state = status.rejectd;
            this.value = reason;
        }
        try{
            executor(resolve, reject);
        } catch(err) {
            reject(err);
        }
    }

    static resolve(value) {
        return new MyPromise(res => res(value));
    }

    static reject(reason) {
        return new MyPromise((_,rej) => rej(reason));
    }

    then(handler) {
        if(this.state===states.pending) {
            return new MyPromise(res => {
                this.waitResolveCallback.push(() => {
                    let getValue = handler(this.value) || this.value;
                    res(getValue);
                });
            });
        } else if(this.state===states.fulfilled) {
            return new MyPromise.resolve(handler(this.value));
        } else if(this.state===states.rejected) {
            return this;
        }
    }

    catch(handler) {
        if(this.state===states.pending) {
            return new MyPromise(res => {
                this.waitResolveCallback.push(res(handler(this.value)));
            });
        } else if(this.state===states.rejected) {
            return new MyPromise.resolve(handler(this.value));
        } else if(this.state===states.resolve) {
            return this;
        }
    }
}

new MyPromise((resolve,reject) => {
    setTimeout(() => {resolve(1000)}, 300);
}).then(data => {
    setTimeout(() => console.log(data), 100);
}).then(data => {
    console.log('another then:' + data);
})