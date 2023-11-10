"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const helloWorld = () => `Hola mundo!`;
    let myFunction;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    myFunction = greet;
    console.log(myFunction('Juan'));
    myFunction = helloWorld;
    console.log(myFunction());
})();
