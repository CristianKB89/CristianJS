/* function oddOrEven(array) {
    let resultado = 0;
      array.map(function(i){
      resultado = resultado + i;
    })
    let oddOrEven = resultado%2 == 0?"even":"odd";
    return oddOrEven;
}

console.log(oddOrEven([0, 1, 4]));
 */

/* function solution(number){
    let x = 0;
    for(let i=0; i<number; i++){
        if (number>0){
        i%3==0||i%5==0 ? x+=i:x;
        }
        else{
            x=0;
        }
    }
    return x;

}

console.log(solution(1000)); */

/* function spinWords(string){
    array = string.split(" ");
    let palabra = array.map(function(i){
        return i.length>=5 ? i.split('').reverse().join(''):i;
    })
    return palabra.join(" ");
}
console.log(spinWords("This is another test")); */

/* function narcissistic(value) {
    let array = value.toString().split('');
    let exponente = array.length;
    let resultado = value.toString().split('').reduce(function(r, n) { return r + Math.pow(parseInt(n),exponente) }, 0);
    return resultado == value ? true:false;
  }

console.log(narcissistic(1534));
   */

function validatePIN (pin) {
    let numero = pin.toString().split('');
    boolean = numero.length == 4 || numero.length == 6 ? true : false; 
    if(boolean == true){
        
    }
    
    return boolean;
  }

  console.log(validatePIN(122334));