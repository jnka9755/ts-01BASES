(() => {

    const hero:[string, number, boolean] = ['Hulk', 100, true];
    
    hero[0] = 'Juan';
    hero[1] = 50;
    hero[2] = false;

    console.log(hero);
})()