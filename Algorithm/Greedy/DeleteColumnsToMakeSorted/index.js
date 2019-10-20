"use strict";
exports.__esModule = true;
var minDeletionSize = function (A) {
    if (A.length <= 1) {
        return 0;
    }
    var i = 0;
    while (i < A[0].length) {
        if (helper(A, i)) {
            return i;
        }
        i++;
    }
    function helper(A, i) {
        for (var j = 0; j < A.length - 1; j++) {
            if (A[j][i] > A[j + 1][i]) {
                return false;
            }
        }
        return true;
    }
    return i;
};
var test = ["ca","bb","ac"];
console.log(minDeletionSize(test));
