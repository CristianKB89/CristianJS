/* let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;
let dividir = (numero1, numero2) => numero1 / numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1, numero2);
console.log(calculadora(5,8,sumar));
 

function suma (numero1, numero2){
    return numero1 + numero2;
}
function resta (numero1, numero2){
    return numero1 - numero2;
}
function multiplicacion (numero1, numero2){
    return numero1 * numero2;
}
function division (numero1, numero2){
    return numero1 / numero2;
}

function calculadora (numero1, numero2, operacion){
    return operacion(numero1, numero2);
}

console.log (calculadora (5,4,suma))

 */

/*****************************For  +  CALLBACK******************************************/

function agregarHttp(url) {
    return "http://" + url;
}



function procesar(array,callback){
    let urls = array.map(function(links){
        return callback(links);
    });
  return urls;
}


console.log(procesar(["www.google.com","www.yahoo.com"],agregarHttp))