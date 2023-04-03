// Ejercitación:

//1. Realizar un programa que dado 2 números imprima por consola si el primer numero es
//mayor que el segundo.

//Respuesta 1
//Ingrese un numero en los parametros:
let x = 3;
let y = 4;
//
    if (x > y){
        console.log(`Este numero "${x}" es mayor a este "${y}"`);
    }    
    else {
        console.log(`Este numero "${x}" es menor a este "${y}"`);
    }


//2. Realizar un programa que dado 2 números imprima por consola si los numeros son
//iguales o si son diferentes.

//Ingrese un numero en los parametros.
let x = ;
let y = ;

    if (x === y){
        console.log(`Son iguales`);
    }else { 
        console.log(`Son distintos`);
    }

//3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
//es el mas grande o si son iguales.

//Ingrese un numero en los parametros.
let valorUno = ;
let valorDos = ;

    if (valorUno === valorDos){
        console.log(`Son iguales`);
    } else if (valorUno > valorDos) {
        console.log(valorUno);
    } else { 
        console.log(valorDos);
    }

//4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el mas
//chico.

//Ingrese un numero en los parametros.----------
let a = 4;
let b = 5;
let c = 1; 

function elMasChico(a, b, c) {
    if (a < b && a < c) {
        console.log(`${a} es el numero mas chico`);
    }else if (b < a && b < c) {
        console.log(`${b} es el numero mas chico`);
    }else {
        console.log(`${c} es el numero mas chico`);
    }
} 


//5. Realizar un programa que dado 2 objetos representando personas con las propiedades
//nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
//es la de mayor edad.

//Persona----------------------------
const personaUno = {
    nombre: "Nicolas",
    edad: 21,
    altura: 1.72
}
const personaDos = {
    nombre: "Angel",
    edad: 32,
    altura: 1.70
} 
function personas(){
    if (personaUno.altura > personaDos.altura){
        console.log(`${personaUno.nombre} es mas alto`);
    } else {(personaUno.altura < personaDos.altura);
        console.log(`${personaDos.nombre} es mas alto`)
    } 
    if (personaUno.edad > personaDos.edad){
        console.log(`${personaUno.nombre} es mayor`);        
    } else {(personaUno.edad < personaDos.edad);
        console.log(`${personaDos.nombre} es mayor`)
    } 
} 



//6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
//y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
//una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
//mínimo.

//Licencia-------------------------------
function ingreseSusDatos(){
    const nombre = prompt('Ingrese su nombre:');
    const edad = prompt('Ingrese su edad:');
    const visión = prompt('Ingrese su visión en un rango de 0 a 10):');
    const altura = prompt('Ingrese su altura ej "150":');

    if (edad >= 18 && altura > 150 && visión >= 8); {
        console.log(`${nombre} estás capacitado/a para conducir`);
    } else {
        console.log(`${nombre} no estás capacitado/a para conducir`);
    }
} 

/* 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase (vip 
o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean tu
mismo nombre tienen ingreso libre así como también los que posean un pase vip,mostrar un mensaje de bienvenida. 
Si posee entrada preguntar si desea utilizarla, en caso afirmativo mostrar mismo mensaje de bienvenida. 
Y por ultimo de no tener el mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
afirmativo solicitar dinero disponible, si posee $1000 o mas, mostrar mensaje de venta
de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
caso contrario a no querer comprar, mostrar mensaje de despedida.
 */

//Programa----------------------------
function acceso(){
    let nombre = prompt("Ingrese su nombre a continuación:");
    if (nombre === "Nicolas") {
        alert(`¡Bienvenido!`);
    } else {
        let pase = prompt(`Ingresa tu tipo de pase ${nombre}:`);
        if (pase === "vip") {
            alert(`¡Bienvenido! ${nombre}`);
        } else {
            let entrada = prompt("¿Posees una entrada?");
            if (entrada === "si") {
                let usarEntrada = prompt("¿Desea utilizar la entrada?");
                if (usarEntrada === "si") {
                    alert(`Tienes pase normal ¡Bienvenido! ${nombre}`);
                } else {
                    alert("¡No te olvides que puedes utilizarla en cualquier momento!");
                }
            } else {
                let comprar = prompt(`¿Quieres comprar tu entrada? Costo $1.000`);
                if (comprar === "si") {
                    let dinero = prompt("Ingrese su dinero disponible en numeros");
                    if (dinero >= 1000) {
                        alert(`Compra realizada con exito ${nombre} ¡Bienvenido!`);
                    } else {
                        alert("No posee suficientes fondos para comprar una entrada");
                    }
                } else {
                    alert("transacción no realizada");
                }
            }
        }
    }
} 

/* 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
llamada numeroIncognita y que permita en 3 intentos adivinar el numero. El usuario
deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
guardar en una variable llamada numeroIngresado, y en cada intento deberás
mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
adivinar, un mensaje que diga: “Ganaste, haz adivinado el numero.” No te preocupes si
usas mucho código repetido, mas adelante veraz como realizar este juego de manera
mas eficiente. */

//Juego
function juegoAdivinanza(){
    const numeroIncognita = Math.floor(Math.random() * 10);
        let numeroIngresado = prompt(`Adivina el numero oculto, coloca un numero del 1 al 10`);
           if (numeroIngresado = numeroIncognita){ 
                alert(`¡Que rapido, adivinaste el numero! sí, era el ${numeroIngresado}`)
            } else if (numeroIngresado < numeroIncognita){
                alert (`${numeroIngresado} es menor al numero oculto, prueba otra vez`)
            } else { (numeroIngresado > numeroIncognita)
                alert (`${numeroIngresado} es mayor al numero oculto, prueba otra vez`)
            }
             numeroIngresado = prompt(`Segundo intento`);
            if (numeroIngresado = numeroIncognita){
                alert(`¡Adivinaste el numero! sí, era el ${numeroIngresado}`)
            } else if (numeroIngresado < numeroIncognita){
                alert (`${numeroIngresado} es menor al numero oculto, prueba otra vez`)
            } else { (numeroIngresado > numeroIncognita)
                alert (`${numeroIngresado} es mayor al numero oculto, prueba otra vez`)
            }
             numeroIngresado = prompt(`Tercer y ultimo intento`);
            if (numeroIngresado = numeroIncognita){
                alert(`¡Adivinaste el numero! sí, era el ${numeroIngresado}`)
            } else {
                alert (`${numeroIncognita} era el numero oculto`)
            }        
}  


 