//#region variables
var Damian = `Alumno comprometido`;
let Wiedermann = 'El profe que mejor explica';
const Juan = "Preceptor que no suele faltar";
let altaFrase = `Damián Lorang ${Damian}, Exequiel Wiedermann ${Wiedermann} y Juan Perez ${Juan}`;
let num1 = 11;
let num2 = 13;
let suma = num1+num2;
let resta = num2-num1;
let multiplicacion = num1*num2;
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
//#endregion variables
//#region impresion
console.log(Damian);
console.log(Wiedermann);
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
if (Damian=="Alumno comprometido"){
    console.log("Damián merece buena nota");
}else{
    console.log("Damián no merece buena nota");
}   
if(Wiedermann=="El profe que mejor explica"){
    Wiedermann='el mejor profe';
    console.log("Wiedermann es ",Wiedermann);
}else{
    Wiedermann='un profe comun';
    console.log("Wiedermann es",Wiedermann);
}
//#endregion condicionales