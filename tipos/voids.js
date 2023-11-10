"use strict";
(() => {
    function test1() {
        return;
    }
    const test2 = () => {
        return;
    };
    const a = test1();
    console.log(a);
})();
