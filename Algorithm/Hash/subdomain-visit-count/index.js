/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
  let map = new Map();
  let res = [];
  cpdomains.forEach(item => {
    const count = parseInt(item.split(' ')[0]);
    const domain = item.split(' ')[0].split('.');
    putIntoMap(domain, count);
  });  
  
  map.forEach((key,value) => {
    let str = value + ' ' + key;
    res.push(str);
  })

  return res;

  function putIntoMap(domain, count) {
    for(let i=1; i<domain.length; i++) {
      const neg = -1 - i;  
      const subdomain = domain.slice(neg).join('.');
      if(map.has(subdomain)) {
        let mapCount = map.get(subdomain);
        map.set(subdomain, mapCount+count);
      } else {
        map.set(subdomain, count);
      }
    }
  }
};