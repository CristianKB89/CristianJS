function comparar (nombre1, nombre2){
	return nombre1 == nombre2;  // Comparación  comparar("5", 5); True compara valores no más
	//return nombre1 != nombre2;   Desigual   false porque valida es que no sean iguales
	//return nombre1 === nombre2;  Comparación Estricta comparar("5", 5);   False porque tambien compara tipo de dato
}

let comparacion = comparar ("Cristian", "Cristian");

console.log(comparacion);