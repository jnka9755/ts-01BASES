(() => {

    enum States {
        active = 1,
        inactive,
        pending,
        delete
    }

    const currentState:States = States.active;
    console.log(currentState)
    console.log(States)
})()