(() => {

    const heroe: string  = 'Juan';

    function returnName(): string {
        return heroe;
    }

    const activateHero = ():string =>{
        return 'Activado';
    }

    console.log(typeof activateHero);

    const heroName = returnName();
})()