"use strict";
(() => {
    let number1 = 1;
    console.log(number1);
    const number2 = 20;
    if (number1 < number2) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Todo Ok');
    }
    number1 = Number('55A');
    console.log({ number1 });
})();
