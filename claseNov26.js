//Array JavaScript

let miPrimerArray = [1, 2, 3, 4, 5, "Juan", "Pedro", "Maria"];

miPrimerArray.push("Nuevo Elemento"); //añadir un elemento al final del array
console.log(miPrimerArray);
miPrimerArray.unshift("Inicio"); //añade elemento al inicio
console.log(miPrimerArray);
miPrimerArray.splice(2, 0, "Elemento en la posicion 2"); //Añado un elemento en una posicion concreta
console.log(miPrimerArray);
miPrimerArray.splice(3, 1); //elimina un elemento en la posicion 3
miPrimerArray.splice(4, 2, "Nuevo Elemento 1", "Nuevo Elemento 2"); //reemplaza dos elementos a partir de la posicion 4
console.log(miPrimerArray);

//Ejercicio 1 Colores
let colores = ["Rojo", "Verde", "Azul", "Amarillo"];colores[0] = "Naranja"; //cambiar el primer elemento
console.log(colores);

//Crea un Array con los nombres Ana, Luis, Marta. Elimina a Luis, Añadir a Pedro al principio y Sofia al final. Imprime el array.
let nombres = ["Ana", "Luis", "Marta"];
nombres.splice(1, 1); //elimina a Luis
nombres.unshift("Pedro"); //añade a Pedro al principio
nombres.splice(3, 0, "Sofia"); //añade a Sofia al final
console.log(nombres);

/******************************************************/

//Funciones JavaScript
function resta() {
    return 10 - 5;
}

let resultadoResta = resta();
console.log("El resultado de la resta es: " + resultadoResta);

function calcular(x){
    return x * 2;
}

let valorCalculo = calcular(5); //el número dentro del parentesis es el argumento
console.log("El resultado del calculo es: " + valorCalculo);

function suma(a, b, c, d) {
    return a + b + c + d;
};

let resultadoSuma = suma(1, 2, 3, 4);
console.log("El resultado de la suma es: " + resultadoSuma);

/*****************************************************/7

//Operadores aritméticos
let a = 10;
let b = 5;
let sumaAB = a + b;
let restaAB = a - b;
let multiplicacionAB = a * b;
let divisionAB = a / b;
let moduloAB = a % b; //o residuo de la división
let exponenteAB = a ** b; //a elevado a b
console.log("Suma: " + sumaAB);
console.log("Resta: " + restaAB);
console.log("Multiplicación: " + multiplicacionAB);
console.log("División: " + divisionAB);
console.log("Módulo: " + moduloAB);
console.log("Exponente: " + exponenteAB);

//Operadores de incremento y decremento
let contador = 0;
contador++; //incremento en 1
console.log("Contador después del incremento: " + contador);
contador--; //decremento en 1
console.log("Contador después del decremento: " + contador);
console.log("Contador después de otro incremento: " + ++contador); //incremento antes de usar el valor
console.log("Contador después de otro incremento: " + ++contador); //incremento antes de usar el valor
console.log("Contador después de otro incremento: " + ++contador); //incremento antes de usar el valor
console.log("Contador después de otro incremento: " + ++contador); //incremento antes de usar el valor
console.log("Contador después de otro incremento: " + ++contador); //incremento antes de usar el valor
console.log("Contador después de otro decremento: " + --contador); //decremento antes de usar el valor

//Operadores de asignación
let numero = 10;
numero += 5; //equivalente a numero = numero + 5
console.log("Número después de += 5: " + numero);
numero -= 3; //equivalente a numero = numero - 3
console.log("Número después de -= 3: " + numero);
numero *= 2; //equivalente a numero = numero * 2
console.log("Número después de *= 2: " + numero);
numero /= 4; //equivalente a numero = numero / 4
console.log("Número después de /= 4: " + numero);
numero %= 3; //equivalente a numero = numero % 3
console.log("Número después de %= 3: " + numero);
numero **= 2; //equivalente a numero = numero ** 2
console.log("Número después de **= 2: " + numero);

//Operadores de comparación
let x = 10;
let y = '10';
console.log("x == y: " + (x == y)); //true, compara valores
console.log("x === y: " + (x === y)); //false, compara valores y tipos
console.log("x != y: " + (x != y)); //false, compara valores
console.log("x !== y: " + (x !== y)); //true, compara valores y tipos
console.log("x > 5: " + (x > 5));   //true
console.log("x < 15: " + (x < 15)); //true
console.log("x >= 10: " + (x >= 10)); //true
console.log("x <= 8: " + (x <= 8));  //false

//Operadores lógicos
let p = true;
let q = false;
console.log("p && q: " + (p && q)); //false
console.log("p || q: " + (p || q)); //true
console.log("!p: " + (!p)); //false
console.log("!q: " + (!q)); //true

/***************************************************************/

//Desafio

let precioProducto = 75;
let cantidad = 2;
let costoEnvio = 10;

let subtotal = precioProducto * cantidad;
console.log("El subtotal es: " + subtotal);

//Si el subtotal es mayor a 100, aplique un 10% de descuento sin usar if else o switch
let descuento = subtotal > 100 ? subtotal * 0.10 : 0;
console.log("El descuento es: " + descuento);

// Si el subtotal (con descuento) es mayor a 150, el costo de envío es 0
costoEnvio = (subtotal - descuento) > 150 ? 0 : costoEnvio;
console.log("El costo de envío es: " + costoEnvio);

let total = subtotal - descuento + costoEnvio;
console.log("El total a pagar es: " + total);