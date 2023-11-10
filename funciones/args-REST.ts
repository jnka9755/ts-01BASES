(() => {

    const fullName = (firstName: string, ...restArgs:string[] ) :string =>{
        return `${firstName} ${restArgs.join(' ')}`
    }

    const person = fullName('Juan', 'Camilo', 'Santana');

    console.log({ person })
})()