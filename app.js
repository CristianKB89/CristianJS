const fs = require('fs');

var archivoTareas = JSON.parse(fs.readFileSync("tareas.json", 'utf-8'));
var arrayTareas = [];
var tareas = [];

let estadoSolicitado = (estado) => {
    let estadoMinusculas = estado.toLowerCase();
    for (let i = 0; i < archivoTareas.length; i++){
        arrayTareas=archivoTareas[i];
        arrayTareas.estado == estadoMinusculas ? tareas.push(arrayTareas): tareas;
    }
    return tareas;  
};

console.log(estadoSolicitado('PenDientE'));
