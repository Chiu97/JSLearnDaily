"use strict";
function filterByTerm(input, searchTerm) {
    if (!searchTerm)
        throw Error("searchTerm cannot be empty");
    if (!input.length)
        throw Error("input cannot be empty");
    var regex = new RegExp(searchTerm, "i");
    return input.filter(function (arrayElement) {
        return arrayElement.url.match(regex);
    });
}
// filterByTerm([{ url:'string1'}, {url:'string2'}, {url:'stringjava'}], "java");
var obj1 = { url: 'string1' };
var obj2 = { url: 'string2' };
var obj3 = { url: 'hen you too beautiful' };
var arrOffLinks = [obj1, obj2, obj3];
var term = 'java';
filterByTerm(arrOffLinks, term);
var ILu = {
    url: 'ikun gay with luhan.com',
    strength: 1000
};
