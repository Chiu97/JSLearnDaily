/**
 * @param {string} s
 * @return {string}
 */

 var decodeString = function(s) {
    let res = '';

    for(let i=0; i<s.length; i++) {
        if(!isNaN(s[i])) {
            const numStart = i;
            while(!isNaN(s[i+1])) {
                i++;
            }
            const times = parseInt(s.slice(numStart,i+1));
            const substrEnd = findSubItem(i+1);
            let substring = s.slice(i+2,substrEnd-1);
            res += decodeString(substring).repeat(times);
            i = substrEnd-1;
        } else if(s[i]==='[') {
            i++;
            while(s[i]!==']') {
                res += s[i];
                i++;
            }
        } else {
            res += s[i];
        }
    }

    return res;

    function findSubItem(start) {
        let iter = start+1;
        let lbc = 1;
        let rbc = 0;
        let flag = false;
        while(lbc>rbc) {
            if(s[iter]==='[') {
                lbc++;
            } else if(s[iter]===']') {
                rbc++;
            }
            iter++;
        }
        return iter;
    }
};

const s = "100[leetcode]";
console.log(decodeString(s));