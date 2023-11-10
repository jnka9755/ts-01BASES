(() => {

    const string1: string = 'Juan';
    const string2: string = "Camilo";
    const string3: string = `Héroe: Volcan negro`;

    console.log(`I'm ${string2}`);
    console.log( string1.toUpperCase() );

    console.log(string1[10]?.toUpperCase || 'No hay nada')
})()