let bicicletaA = {
    rodado: 58,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = {
    rodado: 0,
    marca: ""
}

bicicletaA.rodado > bicicletaB.rodado ?  bicicletaConRodadoGrande = bicicletaA : bicicletaConRodadoGrande = bicicletaB;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

console.log(bicicletaConRodadoGrande);