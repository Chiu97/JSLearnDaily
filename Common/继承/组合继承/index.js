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
    Animal.call(this);
    this.name = name || 'Tom';
}
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;

const cat = new Cat('John');
cat.sayName(); // John