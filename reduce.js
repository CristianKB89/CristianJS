let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce (function(vueltas,num){
    return vueltas + num;
});

console.log(totalVueltas);