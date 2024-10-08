//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de FemCoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log ('Bienvenida al bootcamp de FemCoders de Factoría F5');


//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

const string = 'Hola caracola';
const number = 123;
const boolean = true;
const nullValue = null;
const undefinedValue = undefined;
const object = {
    name: 'Juan', age: 30
};
const array = ['string',123,true,null, undefined];

console.log (string);
console.log (number);
console.log (boolean);
console.log (nullValue);
console.log (undefinedValue);
console.log (object);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const desserts = ['helado', 'tarta', 'pastel'];

console.log (desserts);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const object4 = {
    name: 'Carlos', age: 28
};

console.log (object4)

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log (object4.name);
console.log (object4.age);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

const numberOne = 5;
const numberTwo = 7;
const sumOfNumbers = numberOne + numberTwo;
console.log (sumOfNumbers);

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

const restOfNumbers = numberOne - numberTwo;

console.log (restOfNumbers);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

const multipliOfNumbers = numberOne * numberTwo;

console.log (multipliOfNumbers);

//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

const divOfNumbers = numberTwo / numberOne;

console.log (divOfNumbers);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

const valueOne = 1;
const valueTwo = 2;
const comparisionOfNumbers = valueOne == valueTwo;

console.log (comparisionOfNumbers);

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

const comparisionTrue = valueOne < valueTwo

console.log (comparisionTrue);

//Ejercicio 11: completa el ejercicio

let num1 = 15;
let num2 = 20;

let comparision = num1 < num2;

console.log(comparision);

//Ejercicio 12: completa el ejercicio

let num3 = 1;
let num3AsString = "1";

let result = typeof num3 == typeof num3AsString;
console.log(result) 

//Ejercicio 13: completa el ejercicio

let result2 = num3 == num3AsString;

console.log(result2);

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
let name14 = "Paula";
let surname14 = "Calvo";
let nameComplet = name14 + " " + surname14;

console.log (nameComplet);

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

 let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6) 
