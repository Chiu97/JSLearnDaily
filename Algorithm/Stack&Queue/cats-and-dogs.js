/* 
  1.add()
  2.pollA()
  3.pollDog()
  4.pollCat()
  5.isEmpty()
  6.isDogEmpty()
  7.isCatEmpty() 
*/

class Pet {
  constructor(type) {
    this.type = type;
  }

  getPetType() {
    return this.type;
  }
}

class Dog extends Pet {
  constructor() {
    super('dog');
  }
}

class Cat extends Pet {
  constructor() {
    super('cat');
  }
}

class PetWithCount {
  constructor(pet,count) {
    this.pet = pet;
    this.count = count;
  }

  getPet() {
    return this.pet;
  }

  getCount() {
    return this.count;
  }

  getPetType() {
    return this.pet.getPetType();
  }
}

class CatDogQueue {
  constructor() {
    this.catQueue = [];
    this.dogQueue = [];
    this.count = 0;
  }

  add(pet) {
    let pwc = new PetWithCount(pet,this.count++);
    if(pet.getPetType() === 'cat') {
      this.catQueue.push(pwc);
    }else {
      this.dogQueue.push(pwc);
    }
  }

  pollAll() {
    if(this.catQueue.length===0 && this.dogQueue.length===0) {
      throw new Error('All queue empty!')
    }
    if(this.catQueue.length===0) {
      return this.dogQueue.shift().getPet();
    }
    if(this.dogQueue.length===0) {
      return this.catQueue.shift().getPet();
    }
    if(this.catQueue[0].getCount() < this.dogQueue[0].getCount()) {
      return this.catQueue.shift().getPet();
    } else {
      return this.dogQueue.shift().getPet();
    }
  }

  pollDog() {
    if(this.dogQueue.length===0) {
      throw new Error('Dog queue empty');
    }
    return this.dogQueue.shift().getPet();
  }

  pollCat() {
    if(this.catQueue.length===0) {
      throw new Error('Cat queue empty');
    }
    return this.catQueue.shift().getPet();
  }

  isEmpty() {
    if(this.dogQueue.length===0&&this.catQueue.length===0) {
      return true;
    }
    return false;
  }

  isDogEmpty() {
    if(this.dogQueue.length===0) {
      return true;
    }
    return false;
  }

  isCatEmpty() {
    if(this.catQueue.length===0) {
      return true;
    }
    return false;
  }
}

let cdq = new CatDogQueue();
for(let i=0; i<10; i++) {
  let rdm = parseInt(Math.random()*2);
  if(rdm === 0) {
    cdq.add(new Cat());
  } else {
    cdq.add(new Dog())
  }
}

console.log(JSON.stringify(cdq));
console.log(cdq.pollDog());
console.log(cdq.isDogEmpty());
console.log(cdq.pollAll());
console.log(`typeof dog:${typeof Dog}`);