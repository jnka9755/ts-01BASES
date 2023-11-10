"use strict";
(() => {
    let States;
    (function (States) {
        States[States["active"] = 1] = "active";
        States[States["inactive"] = 2] = "inactive";
        States[States["pending"] = 3] = "pending";
        States[States["delete"] = 4] = "delete";
    })(States || (States = {}));
    const currentState = States.active;
    console.log(currentState);
    console.log(States);
})();
