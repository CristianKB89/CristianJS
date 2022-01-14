const fs = require('fs');

let archivoDeTareas = {
    archivo: 'tareas.json',
    leerArchivo: function(){
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    filtrarPorEstado: function (estado){
        let tareas = this.leerArchivo();
        let tareasFiltradas = tareas.filter((tarea)=> {
            return tarea.estado === estado;
        });
        return tareasFiltradas;
    },
    escribirJSON: function(tareas){
        fs.writeFileSync(this.archivo, JSON.stringify(tareas , null, ' '))
    },
    guardarTarea: function (tarea) {
        let tareas = this.leerArchivo();
        tareas.push(tarea);
        this.escribirJSON(tareas);
    }/* ,
    filtrarPorIndice: function (indice){
        let tareas = this.leerArchivo();
        let tareasFiltradas = tareas.filter((tarea)=> {
            return tarea.indice === tareas[indice];
        });
        return tareasFiltradas;
    } */
}


module.exports = archivoDeTareas;
