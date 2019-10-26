function Animal(name) {
    this.name = name || 'animal';
};
Animal.prototype.sayName = function() {
    console.log(this.name);
};
Animal.prototype.sleep = function() {
    console.log(this.name + ' gonna sleep');
};  

function Cat(name) {
    const animal = new Animal();
    for(let prop in animal) {
        Cat.prototype[prop] = animal[prop];
    }
    Cat.prototype.name = 'Tom'
};

const cat = new Cat();
cat.sayName();  // Tom