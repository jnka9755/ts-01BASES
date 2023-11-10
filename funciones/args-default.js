"use strict";
(() => {
    const fullname = (firstName, lastName, upper = false) => {
        if (upper)
            return `${firstName} ${lastName || 'sin apellido'}`.toUpperCase();
        else
            return `${firstName} ${lastName || 'sin apellido'}`;
    };
    const name = fullname('Juan', 'Santana', true);
    console.log({ name });
})();
