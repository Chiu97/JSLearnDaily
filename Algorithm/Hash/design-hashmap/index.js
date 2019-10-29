/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.hashArray = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.hashArray = this.hashArray.filter(item => {
        if(item[0] !== key) {
            return true;
        }
    });
    this.hashArray.push([key,value]);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let getResult;
    for(let i=0; i<this.hashArray.length; i++) {
        if(this.hashArray[i][0]===key) {
            getResult = this.hashArray[i][1];
        }
    }
    if(getResult===undefined) {
        return -1;
    }
    return getResult;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    this.hashArray = this.hashArray.filter(item => {
        if(item[0] !== key) {
            return true;
        }
    });
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */