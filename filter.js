let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(lista1){
  return lista1.aprobado == true;
});

let desaprobados = estudiantes.filter(function(lista2){
  return lista2.aprobado == false;
});
    

console.log(aprobados);
console.log(desaprobados);