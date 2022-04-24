const fs = require('fs');

var archivoTareas = JSON.parse(fs.readFileSync("tareas.json", 'utf-8'));
let resultado = [];

let estado = process.argv[2];

let estadoSolicitado = (estado) => {
    archivoTareas.map(function(lista){
        return lista.estado == estado.toLowerCase() ? resultado.push(lista): resultado;});
    return console.log(resultado);  
};

/* console.log(estadoSolicitado('Terminada')); */
