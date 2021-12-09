function saludo (saludo, nombre, apellido) {    //Declaración de la función saludo
	return "Hola " +saludo + nombre + apellido;
}

let hola = saludo ("Ingeniero ", "Pepito ", "Perez");  //Asignación de una variable con el resultado de una función ya declarada...

console.log(hola);      // Muestra el resultado por consola de la variable hola...