// 使用parent constructor的实例作为child constructor的原型  

function Animal(name) {
    this.name = name || 'animal';
};

Animal.prototype.sayName = function() {
    console.log(this.name);
};

function Cat() {
};

Cat.prototype = new Animal(); 
Cat.prototype.name = 'cat'; 
Animal.prototype.sleep = function() {
    console.log(this.name + ' gonna sleep');
};
Cat.prototype.sayName = function() {
    console.log('cat\'s sayName()');
};

const cat = new Cat();
cat.sayName();  // cat's sayName()
cat.sleep();   // cat gonna sleep

