(()=>{

    type Person = {
        name: string,
        age?: number,
        cities: number[]
        getName?: () => string
    }

    let myVariable: (string | number | Person) = 'ABC';

    console.log(typeof myVariable);

    myVariable = 10;
    console.log(typeof myVariable);

    myVariable = {
        name: 'Juan',
        age: 26,
        cities: [1]
    };
    console.log(typeof myVariable);
})()