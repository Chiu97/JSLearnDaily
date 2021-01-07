"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
function subscribeToTheRXButton() {
    var btn = document.querySelector('#rx-source-button');
    var counter = 0;
    if (!btn)
        return;
    var source$buttonClick = rxjs_1.fromEvent(btn, 'click');
    var subscription$buttonClick = source$buttonClick.subscribe(function (event) {
        console.log(event);
        if (++counter > 3)
            subscription$buttonClick.unsubscribe();
    });
}
subscribeToTheRXButton();
