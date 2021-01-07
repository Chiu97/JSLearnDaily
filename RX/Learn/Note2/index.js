"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
function subscribeToTheRXButton() {
    var btn = document.querySelector('#rx-source-button');
    var counterDisplay = document.querySelector('#rx-counter-display');
    if (!btn || !counterDisplay)
        return;
    var counter = 0;
    var source$buttonClick = rxjs_1.fromEvent(btn, 'click').pipe(operators_1.map(function (_) { return counter++; }));
    source$buttonClick.subscribe({
        next: function (event) {
            console.log(event);
            counterDisplay.innerText = '' + counter;
        },
        error: function (err) {
            console.log('get err:', err);
        },
        complete: function () { return console.log('Tt is now stream complete'); }
    });
}
subscribeToTheRXButton();
