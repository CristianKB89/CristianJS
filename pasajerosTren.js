function reporteDePasajeros (estacion){
    let pasajeros = 200;
    let reporte = [];
    for (let i = 0; i <= estacion; i++){
        if (i != 5 && i !=0){
            pasajeros = pasajeros + 20;
        }
        else if (i == 5){
            pasajeros = pasajeros + 40;
        }
      reporte.push("En la estación "+ i + " hay "+ pasajeros + " pasajeros arriba del tren");
    }
    return reporte;
}
console.log (reporteDePasajeros(10))

