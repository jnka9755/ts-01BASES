(() => {

    const fullname = (firstName:string, lastName?:string, upper: boolean = false): string => {
        
        if(upper)
            return `${firstName} ${lastName || 'sin apellido'}`.toUpperCase();
        else
            return `${firstName} ${lastName || 'sin apellido'}`;
    }

    const name = fullname('Juan', 'Santana', true);

    console.log({name});
})()