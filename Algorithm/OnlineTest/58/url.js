function getParam (url, key) {
  let res = undefined;
  if(!url.includes('?')) {
    return res;
  }
  let paramsPart = url.split('?')[1];
  let params = paramsPart.split('&').map( item => { return decodeURIComponent(item) });
  params.forEach(param => {
    let paramKey = '';
    let value = '';
    if(param.includes('=')) {
      let temp = param.split('=');
      paramKey = temp[0];
      value = temp[1];
    } else {
      paramKey = param;
      value = 'true';
    }
    if(key === paramKey) {
      res = value;
    }
  });
  return res;
}

let res = getParam('https://mfang.58.com/sh/loupan/59039761/?from=home&city=%E4%B8%8A%E6%B5%B7&name','fom');
console.log(res);