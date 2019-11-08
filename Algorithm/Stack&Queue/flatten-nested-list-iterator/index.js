var NestedIterator = function(nestedList) {
    this.iteratorArray = flatten(nestedList).reverse();
};

var flatten = function(arr) {
    let ret = [];

    if(!Array.isArray(arr)) return arr;

    arr.forEach(v => {
        if(Array.isArray(v)) {
            ret = ret.concat(flatten(v));
        } else {
            ret.push(v);
        }
    });

    return ret;
}

NestedIterator.prototype.hasNext = function() {
    return this.iteratorArray.length > 0;
};

NestedIterator.prototype.next = function() {
    return this.iteratorArray.pop();
};