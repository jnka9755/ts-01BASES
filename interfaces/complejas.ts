(() => {

    interface Client {
        name: string;
        age: number;
        address: Address
        getFullAddres (): void;
    }
    
    interface Address {
        id: number;
        zipe: string;
        city: string;
    }

    const client: Client = {
        name: 'Juan',
        age: 25,
        address: {
            id: 123,
            zipe: 'KY2 SUD',
            city: 'Mosquera'
        },
        getFullAddres() {

        }
    }


    const client2: Client = {
        name: 'Camilo',
        age: 25,
        address: {
            id: 123,
            zipe: 'KY2 SUD',
            city: 'Mosquera'
        },
        getFullAddres() {

        }
    }
})