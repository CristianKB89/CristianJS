const fs = require('fs');

var archivoTareas = JSON.parse(fs.readFileSync("tareas.json", 'utf-8'));
let resultado = [];
let estadoSolicitado = (estado) => {
    /*     for (let i = 0; i < archivoTareas.length; i++){
        arrayTareas=archivoTareas[i];
        arrayTareas.estado == estado.toLowerCase() ? resultado.push(arrayTareas): resultado;
    } */
    
    archivoTareas.map(function(lista){
        return lista.estado == estado.toLowerCase() ? resultado.push(lista): resultado;
    });
    return resultado;  
};

console.log(estadoSolicitado('Terminada'));
