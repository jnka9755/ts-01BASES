(() => {

    const fullname = (firstName:string, lastName?:string): string => {
        return `${firstName} ${lastName || 'sin apellido'}`;
    }

    const name = fullname('Juan');

    console.log({name});
})()