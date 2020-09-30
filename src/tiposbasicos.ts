/* Familiarización con los tipos básicos y algunas operaciones */

/* Para declarar variables usamos let, podemos crear la variable vacia (será de tipo any)
darle un valor a la variable al crearla (será del tipo de dato que le demos) o
declarar el tipo de variable  */

let test1; //tipo any
let test2=false //tipo boolean
let test3:number //tipo number 
let test4:string="false" //tipo string

/* El tipo number recoge diferentes tipos numeros */

let decimal=6 //decimales
let hexadecimal=0x0007 //hexadecimal

console.log(decimal+hexadecimal) //como podemos comprobar con esta sencilla cuenta, al sumar 
                                 //dos bases diferentes nos da el resultado en decimal

/* También podemos usar el tipo unknown para crear variables que adquieran  el tipo del dato  */

let incognita:unknown=5            //incognita es tipo number
incognita=false                    //incognita es tipo boolean
incognita="Ahora es un string"     //incognita es tipo string

/* También existe el tipo void pero aplicarlo a variables no es muy útil porque no pueden
tener ningún valor */
let nada:void

/* Se pueden crear variables que puedan ser de más de un tipo usando el caracter | */
let varios:number|boolean|string
varios=34         
varios=false      
varios="string"   

/* Hay dos formas de declarar los arrays, además podemos hacer uso de | para crear arrays
de varios tipos */
let lista1:number[]                 //IMPORTANTE no olvidar los corchetes sino será tipo number
let lista2:Array<string>
let lista3:Array<string|number|boolean>
lista3=["4","hola"]                 //Aunque lista3 acepte varios tipos todos sus elementos deben 
lista3=[4,4,2]                      //ser del mismo tipo

/* Podemos crear nuestros propios tipos(enumerados) haciendo uso de enum */
enum Trabajo {
    Profesor,           //A cada uno de los elementos del enumerado se le asigna
    Director,           //un número empezando desde 0 aunque se le pueden poner 
    Mantenimiento       //manualmente
}

let persona1:Trabajo=Trabajo.Director //Creamos persona1, de tipo Trabajo  y valor Director
let persona2:String=Trabajo[0]        //Creamos persona2, de tipo String y valor Profesor

console.log(persona2)                 //Sacaremos por pantalla "Profesor"
console.log(persona1)                 //Aqui sacamos por pantalla 1