"use strict";
var tom = {
    name: "Tom",
    city: "Munich",
    age: 33,
    printDetails: function () {
        console.log(this.name + " - " + this.city);
        return 'what';
    }
};
