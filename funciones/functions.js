"use strict";
(() => {
    const heroe = 'Juan';
    function returnName() {
        return heroe;
    }
    const activateHero = () => {
        return 'Activado';
    };
    console.log(typeof activateHero);
    const heroName = returnName();
})();
