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
