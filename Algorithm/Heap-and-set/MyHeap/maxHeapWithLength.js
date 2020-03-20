class maxHeap {
  constructor(maxLen) {
      this.heap = [];
      this.maxLen = maxLen;
  }

  getMax() {
      return this.heap[0];
  }

  getHeap() {
      return this.heap;
  }

  insertNode(val) {
      if(this.heap.length<this.maxLen) {
          this.heap.push(val);
          let current = this.heap.length - 1;
          let parent = Math.floor((current-1)/2);

          while(current>0 && this.heap[parent] < this.heap[current]) {
              [this.heap[parent], this.heap[current]] = [this.heap[current], this.heap[parent]];
              current = parent;
              parent = Math.floor((current-1)/2);
          }

      } else {
          if(val>=this.heap[0]) return;
          this.heap[0] = val;
          let current = 0;
          while(current<this.maxLen) {
              const cld1 = current*2 + 1;
              const cld2 = current*2 + 2;
              if(this.heap[cld1]===undefined) return;

              let biggerIdx = cld1;
              if(this.heap[cld2]!==undefined&&this.heap[cld2]>this.heap[cld1])
                  biggerIdx = cld2;

              if(this.heap[biggerIdx]>this.heap[current]) {
                  [this.heap[biggerIdx], this.heap[current]] = [this.heap[current], this.heap[biggerIdx]];
                  current = biggerIdx;
              } else return;
          }
      }
  }
}

module.exports = maxHeap;