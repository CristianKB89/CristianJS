const archivoDeTareas = require('./funcionesDeTareas');

let accion = process.argv[2];
let tareas = archivoDeTareas.leerArchivo();


let callback = (tarea, index) => {
    console.log((index + 1) +'. '+ tarea.titulo +' - ' + tarea.estado);
}

switch (accion){
    case "Listar":
        tareas.forEach(callback);
    break;
    case "Filtrar":
        let estado = process.argv[3];
        let filtradas = archivoDeTareas.filtrarPorEstado(estado);
        filtradas.map(
            (tarea, indice) => console.log(indice + "-" + tarea.titulo));
    break;
    case "Crear":
        let titulo = process.argv[3];
        let tarea = {
            titulo: titulo,
            estado: "pendiente"
        }
        archivoDeTareas.guardarTarea(tarea);
    break;
/*     case "Actualizar":
        let indice = process.argv[3];
        archivoDeTareas.filtrarPorIndice(indice);
        
    break; */
    default :
    console.log("No se realizar la operacion");
}

