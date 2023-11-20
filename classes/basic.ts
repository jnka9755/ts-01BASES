(() => {

    class Avenger {
        static age: number = 35;
        static getAvgAge (){
            return this.name;
        }

        constructor(
            private name: string, 
            private team: string, 
            public realName?:string
            ) {}

            public bio(){
                return `${ this. name } (${ this.team })`
            }
    }

    const antMan: Avenger = new Avenger('AntMan', 'Cap', 'Scott Lang');

    // console.log(antMan);
    // console.log(Avenger.age);

    // console.log(antMan.bio());
    // console.log(Avenger.getAvgAge());

})()