(() => {

    class Avenger {
        constructor (
            public name?: string,
            public realName?: string
        ){
            // console.log('Constructor Avenger llamado!!'):
        }

        protected getFullName(){
            return `${ this.name } ${ this.realName }`;
        }
    }

    class Xmen extends Avenger{
        constructor(
            public name :string,
            public realName: string,
            public isMutant:boolean
        ){
            super(name, realName)
            // console.log('Constructor Xmen llamdo');
        }

        get fullName(){
            return `${ this.name } ${ this.realName }`;
        }
        set fullName(name: string){
            this.name = name;
        }

        public getFullNameXmen(){
            super.getFullName();
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);
    wolverine.fullName = 'Juan'

    // console.log(wolverine.fullName);
})()