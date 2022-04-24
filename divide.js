function divide(num1, num2){
    if(num2==0){
        return 'La operación no se puede hacer porque el divisor es 0';
    }
    return num1/num2;
}

module.exports = divide;