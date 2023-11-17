(() => {

    type Person = {
        name: string,
        age: number
    }

    const juan: Person ={
        name: 'Juan Camilo',
        age: 26
    }

    const david: Person ={
        name: 'David Alejandro',
        age: 29
    }

    const johanna: Person= {
        name: 'Johanna Andrea',
        age: 27
    }

    const persons: Person[] = [juan, david, johanna];

    for (const person of persons) {
        console.log(person)
    }

})()