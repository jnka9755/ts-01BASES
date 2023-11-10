(() => {

    function test1():void {
        return;
    }

    const test2 = (): void => {
        return;
    }

    const a = test1();
    console.log(a);
})()