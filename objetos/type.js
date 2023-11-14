"use strict";
(() => {
    let juan = {
        name: 'Juan',
        age: 26,
        cities: [1, 2]
    };
    let Camilo = {
        name: 'Camilo',
        age: 30,
        cities: [1],
        getName() {
            return this.name;
        }
    };
})();
