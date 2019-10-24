/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let strLogs = [];
    let numLogs = [];  
    logs.forEach(item => {
      const checkType = item.split(' ')[1];
      if(isNaN(checkType)) {
        strLogs.push(item);
      } else {
        numLogs.push(item);
      }
    })
    return strLogs.sort(compare).concat(numLogs);

    function compare(item1,item2) {
      let left = item1.split(' ').slice(1).join(' ');
      let right = item2.split(' ').slice(1).join(' ');
      if(left === right) {
        return item1.split(' ')[0] <= item2.split(' ')[0] ? -1 : 1;
      }
      if(left <= right) {
        return -1;
      }
      return 1;
    }
};

const logs = ["j mo", "5 m w", "g 07", "o 2 0", "t q h"];

const res = reorderLogFiles(logs);

console.log(res);