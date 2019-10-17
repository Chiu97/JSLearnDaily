var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line',(line) => {
  j = JSON.parse(line);
  let trips = [];
  for(let trip in j) {
    let obj = Object.create(j[trip]);
    obj.id = trip;
    trips.push(obj);
  }
  
  let sorted = trips.sort(sortRule);

  sorted.forEach(obj => {
    console.log(`${obj.name}:${obj.rank}:${obj.id}:${obj.price}`);
  });
  
  function sortRule(trip1,trip2) {
    if(trip1.price < trip2.price) {
      return -1;
    }
    if(trip2.price < trip1.price) {
      return 1;
    }
    if(trip1.rank > trip2.rank) {
      return -1;
    }
    return 1;
  }  
});
// const j = {"k3845":{"name":"name3012","price":2715,"rank":1},"k3489":{"name":"name2855","price":3105,"rank":1}}
// console.log(JSON.parse(JSON.stringify(j)));
/* {"k3845":{"name":"name3012","price":2715,"rank":1},"k3489":{"name":"name2855","price":3105,"rank":1},"k1232":{"name":"name4396","price":2715,"rank":10082}} */