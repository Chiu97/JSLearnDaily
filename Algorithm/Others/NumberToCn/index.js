const units = ['千','百','十'];
const chars = ['零','一','二','三','四','五','六','七','八','九'];
let numToCn = function(num) {
  const numStr = num.toString();
  let res = '';
  if(numStr.length <= 4) {
    res = baseFour(numStr);
    return cleanZero(res);
  }
  if(numStr.length <= 8) {
    const left = numStr.slice(0,res.length-4);
    const right = numStr.slice(-4);
    res += baseFour(left);
    res += '万';
    res += baseFour(right);
    return cleanZero(res);
  }
  let curStr = numStr;
  let curIter = curStr.slice(-8);
  while(curStr.length>=8) {
    res += '亿';
    const left = curIter.slice(0,curIter.length-4);
    const right = curIter.slice(-4);
    res += baseFour(left);
    res += '万';
    res += baseFour(right);
    curStr = curStr.slice(0,-8);
    curIter = curStr.slice(-8);
  }
  if(curStr.length <= 4) {
    res = baseFour(curStr) + res;
    return cleanZero(res);
  }
  if(res.length <= 8) {
    const left = curStr.slice(0,curStr.length-4);
    const right = curStr.slice(-4);
    res += baseFour(left);
    res += '万';
    res += baseFour(right);
    return cleanZero(res);
  }
}

function baseFour(str) {
  let temp = '';
  for(let i=0; i<str.length-1; i++) {
    const ch = chars[parseInt(str[i])];
    temp += ch;
    if(ch!=='零') {
      temp += units[i];
    }
  }
  const ch = chars[parseInt(str[str.length-1])];
  temp += ch;
  return temp;
}

function cleanZero(str) {
  let res = '';
  for(let i=0; i<str.length-1; i++) {
    if(str[i]==='零'&&str[i+1]==='零') {
      continue;
    }
    res += str[i];
  }
  if(str[str.length-1]!=='零') {
    res += str[str.length-1];
  }
  return res;
}

console.log(numToCn(123006780)); //一亿二千三百零万六千七百八十

/* let testNum = 1238173912731;
const res = numToCn(testNum);
console.log('res:' + res); */