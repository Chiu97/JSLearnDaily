// the settimer way
var debounce = function(fn,wait,immediate) {
    let timer;
    return function() {
        var context = this;
        var args = arguments;
        if(immediate&&!timer) {
            fn.apply(context, args);
            timer = setTimeout(function() {
                fn.apply(context, args);
            },wait);
        } else {
            clearTimeout(timer);
            timer = setTimeout(function() {
                fn.apply(context, args);
            },wait);
        }
    }
}

let db = debounce(function() {
    console.log('debounced!');
},1000,true);

document.getElementById('btn');
btn.addEventListener('click',db);

// the window.requrestAnimationFrame way
// var debounce = function (fn) {
//     var timer;

//     return function() {
//         let context = this;
//         let args = arguments;

//         if(timer) {
//             window.cancelAnimationFrame(timer);
//         }

//         timer = window.requestAnimationFrame(function() {
//             fn.apply(context,args);
//         })
//     }
// }