// Crear interfaces

interface Carro {
  encender: boolean;
  velocidadMaxima: number;
  acelerar () : void
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto: Carro ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: Carro = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales

interface Guason{
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean
}


const guason: Guason = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Guason ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface printCity{
  (ciudadanos: string[]) : number
}


const ciudadGotica : printCity = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

  interface Person{
    nombre : string;
    edad: number
    sexo: boolean
    estadoCivil: number
    imprimirBio(): void 
  }

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Person {
  nombre: string;
  edad: number;
  sexo: boolean;
  estadoCivil: number;
  imprimirBio(): void {
    console.log(this.nombre);
    console.log(this.edad);
    console.log(this.sexo);
    console.log(this.estadoCivil);
  }
}