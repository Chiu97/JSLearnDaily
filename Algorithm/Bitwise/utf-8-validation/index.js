/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {

    for(let i=0; i<data.length; i++) {
        let count = 0;
        let numStr = data[i].toString(2);
        if(numStr.charAt(0)==='0'||numStr.length<8) continue;
        if(numStr.length===8&&numStr.startsWith('10')) return false;
        while(numStr.charAt(count)==='1') {
            count++;
        }
        if(numStr.charAt(count)!=='0') return false;

        if(data.slice(i).length<count||!checkValid(data.slice(i+1, i+count))) return false;

        i += count-1;
    }

    return true;
};

function checkValid(arr) {
    let validRegexp = /^10/;

    for(let i=0; i<arr.length; i++) {
        if(arr[i].toString(2).length<8||!validRegexp.test(arr[i].toString(2))) return false;
    }

    return true;
}

const data = [197,130,1];
const res = validUtf8(data);
console.log(res);