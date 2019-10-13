const cn = ['零','一','二','三','四','五','六','七','八','九'];
const unit = ['十','百','千','万'];
function getSix(num) {
  return getTwo(num) + unit(3);
}

function getFive(num) {
  return cn[parseInt(num)] + unit(3);
}

function getFour(num) {
  return cn[parseInt(num)] + unit(2);
}

function getThree(num) {
  return cn[parseInt(num)] + unit(1);
}

function getTwo(num) {
  return cn[parseInt(num)] + unit[0];
}

function getOne(num) {
  return cn[parseInt(num)];
}

function solution(ip) {
  let len = ip.length;
  let res = '';
  if(len===0) {
    console.log('');
    return;
  } else if(ip.length>)
  console.log(res);
}

solution('5');
