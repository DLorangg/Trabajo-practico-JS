//#region variables
var Damian = `alumno comprometido`;
let Wiedermann = 'el profe que mejor explica';
const Juan = "preceptor que no suele faltar";
let altaFrase = `Damián Lorang ${Damian}, Exequiel Wiedermann ${Wiedermann} y Juan Perez ${Juan}`;
let num1 = 11;
let num2 = 13;
let suma = num1+num2;
let resta = num2-num1;
let multiplicacion = num1*num2;
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
//#endregion variables
//#region impresion
console.log(Juan);
console.log(suma);
console.log(resta);
console.log(multiplicacion);
for (let value of dias){
    console.log(value);
}
console.log(altaFrase);
//#endregion impresion
//#region condicionales
console.log("Wiedermann es "+(Wiedermann ? "el mejor profe." : "un profe común."));
console.log("Damián "+(Damian ? "merece buena nota." : "no merece buena nota."));
//#endregion condicionales