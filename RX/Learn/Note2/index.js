"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function subscribeToTheRXButton() {
    var btn = document.querySelector('#rx-source-button');
    var counter = 0;
    if (!btn)
        return;
    var source$buttonClick = rxjs_1.fromEvent(btn, 'click');
    var subscription$buttonClick = source$buttonClick.pipe(operators_1.take(3)).subscribe(function (event) {
        console.log(event);
        if (++counter > 3)
            subscription$buttonClick.unsubscribe();
    });
}
subscribeToTheRXButton();
