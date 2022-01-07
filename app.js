const fs = require('fs');

let archivoTareas = JSON.parse(
fs.readFileSync("tareas.json", 'utf-8')
);

for (let i = 0; i < archivoTareas.length; i++){
console.log(archivoTareas[i])
}