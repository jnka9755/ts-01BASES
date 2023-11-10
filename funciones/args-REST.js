"use strict";
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const person = fullName('Juan', 'Camilo', 'Santana');
    console.log({ person });
})();
