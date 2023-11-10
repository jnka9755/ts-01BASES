"use strict";
(() => {
    const fullname = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullname('Juan', 'Santana');
    console.log({ name });
})();
