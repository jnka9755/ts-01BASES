"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let Power;
    (function (Power) {
        Power[Power["min"] = 0] = "min";
        Power[Power["low"] = 1] = "low";
        Power[Power["mid"] = 5] = "mid";
        Power[Power["max"] = 100] = "max";
    })(Power || (Power = {}));
    const fuerzaFlash = Power.min;
    const fuerzaSuperman = Power.max;
    const fuerzaBatman = Power.low;
    const fuerzaAcuaman = Power.min;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
