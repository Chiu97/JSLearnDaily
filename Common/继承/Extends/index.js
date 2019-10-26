class Animal {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

class Cat extends Animal{
    constructor(name) {
        super(name);
    }
}  

const cat = new Cat('hippo');
cat.sayName(); // hippo