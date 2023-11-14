"use strict";
(() => {
    let myVariable = 'ABC';
    console.log(typeof myVariable);
    myVariable = 10;
    console.log(typeof myVariable);
    myVariable = {
        name: 'Juan',
        age: 26,
        cities: [1]
    };
    console.log(typeof myVariable);
})();
