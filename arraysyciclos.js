/* function numeroMayor(array){
    let numero = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] > numero){
            numero = array[i];
        }
        console.log("acá array tiene el valor de " + array[i]);
    }
    return numero;
}
console.log(numeroMayor([300,100,-9,9000,800,-300,5000])); */

function numeroPar(array){
    let numero = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            numero.push(array[i]);
        }
        console.log("acá array tiene el valor de " + array[i]);
    }
    return numero;
}
console.log(numeroPar([4,5,-8,7,9,-1,16]));