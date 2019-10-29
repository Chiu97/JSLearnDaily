/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let set = new Set();
    let count = 0;

    for(let i=0; i<J.length; i++) {
        set.add(J.charCodeAt(i));
    }

    for(let i=0; i<S.length; i++) {
        if(set.has(S.charCodeAt(i))) {
            count++;
        }
    }

    return count;
};

const J = "aA";
const S = "aAAbbbb";
const res = numJewelsInStones(J,S);
console.log(res);