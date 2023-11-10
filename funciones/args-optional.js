"use strict";
(() => {
    const fullname = (firstName, lastName) => {
        return `${firstName} ${lastName || 'sin apellido'}`;
    };
    const name = fullname('Juan');
    console.log({ name });
})();
