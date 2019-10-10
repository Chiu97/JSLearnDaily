let car = {
  numOfWheels: 4,
  start() {
    console.log('Your car get started.');
  },
  stop() {
    console.log('Your car is now stop');
  }
};

const myCar = Object.create(car,{ owner: {value:'Colin Chiu'} });
console.log(myCar.__proto__===car);
console.log(myCar.owner);