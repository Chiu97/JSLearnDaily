/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.queue = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
/*     console.log('key:' + key);
    console.log(this.queue); */
    for(let i=0; i<this.queue.length; i++) {
      // console.log(this.queue);
      if(this.queue[i][0]===key) {
        let temp = [this.queue[i][0],this.queue[i][1]];
        const left = this.queue.slice(0,i);
        const right = this.queue.slice(i+1);
        this.queue = [].concat(left,right);
        this.queue.push(temp);
        // console.log(temp);
        // console.log('check queue:' + this.queue);
        // console.log('------------------------');
        return temp[1];
      }
    }
    // console.log('------------------------');
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  for(let i=0; i<this.queue.length; i++) {
    if(this.queue[i][0]===key) {
      const left = this.queue.slice(0,i);
      const right = this.queue.slice(i+1);
      this.queue = [].concat(left,right);
      this.queue.push([key,value]);
      return;
    }
  }
  if(this.count<this.capacity) {
      this.count++;
      this.queue.push([key,value]);
  } else {
    this.queue.shift();
    this.queue.push([key,value]);
  }
};  


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
