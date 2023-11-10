(() => {
    
    let heroe: any = 123;
    let exists;
    let power;

    heroe = 'Juan'

    // console.log(heroe.charAt(0));
    console.log((heroe as string).charAt(0));

    heroe = 123.154;

    console.log((<number>heroe).toFixed(2));

    console.log(exists);
    console.log(power);
})()