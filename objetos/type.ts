(() => {

    type Person = {
        name: string,
        age?: number,
        cities: number[]
        getName?: () => string
    }

    let juan: Person = {
        name: 'Juan',
        age: 26,
        cities: [1, 2]        
    }

    let Camilo: Person = {
        name: 'Camilo',
        age: 30,
        cities: [1],
        getName(){
            return this.name
        }     
    }
})()