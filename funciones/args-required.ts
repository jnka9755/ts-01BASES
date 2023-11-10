(() => {

    const fullname = (firstName:string, lastName:string): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullname('Juan', 'Santana');

    console.log({name});
})()