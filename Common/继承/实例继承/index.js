// 这种方式没办法多继承,不推荐使用

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
    let instance = new Animal();
    instance.name = name || 'kitty';
    return instance;
};

Cat.prototype.foo = function() {
    console.log('bar');
};

let cat = new Cat();
cat.sayName(); // kitty
cat.foo; // undefined