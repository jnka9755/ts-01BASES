(() => {
    // Tipos
    const batman: string = 'Bruce';
    const superman: string= 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes:[string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Power {
      min,
      low,
      mid = 5,
      max = 100
    }

    const fuerzaFlash: Power = Power.min;
    const fuerzaSuperman: Power  = Power.max;
    const fuerzaBatman: Power  = Power.low;
    const fuerzaAcuaman: Power = Power.min;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  })()