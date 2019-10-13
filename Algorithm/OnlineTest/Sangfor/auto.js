let base = ['bps','Kbps','Mbps','Gbps','Tbps'];
let bit = 0;
let solution = function(str) {
  if(str.length<4) {
    console.log(str + ' ' + base[0]);
    return;
  }
  let len = str.length;
  while(len > 3) {
    bit++;
    len = len-3;
  }
  let intPart = str.slice(0, len);
  let dcmCal = str.slice(len, len+3);
  let dcmPart = str.slice(len, len+2);
  if(parseInt(dcmCal[2]) >= 5) {
    dcmPart = parseInt(dcmPart) + 1;
    if(dcmPart === 1) {
      dcmPart = '01';
    } else if(dcmPart === 0) {
      dcmPart = '00';
      intPart = parseInt(intPart) + 1;
      intPart = intPart.toString();
    } else {
      dcmPart = dcmPart.toString();
    }
  }
  console.log(parseInt(intPart) + '.' + parseInt(dcmPart) + base[bit]);
  return;
}

solution('12312315115');