(() => {

    const addNumber = (a: number, b: number): number => a + b;
    const greet = (name: string):string => `Hola ${ name }`;
    const helloWorld = ():string => `Hola mundo!`;

    let myFunction: Function;

    myFunction = addNumber;
    console.log(myFunction(1,2));
    
    myFunction = greet;
    console.log(myFunction('Juan'));
    
    myFunction = helloWorld;
    console.log(myFunction());
})()