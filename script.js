let firstValue = Number(prompt("Digite o primeiro valor: "))
let secondValue = Number(prompt("Digite o segundo valor: "))


alert(sum(firstValue, secondValue));
alert(subtraction(firstValue, secondValue));
alert(multiplication(firstValue, secondValue));
alert(division(firstValue, secondValue));
alert(rest(firstValue, secondValue));
alert(par(firstValue, secondValue));
alert(equalNumbers(firstValue, secondValue));

function sum(value1, value2){
    return "A soma dos dois números é: " + (value1 + secondValue);
}

function subtraction(value1, value2){
    return "A subtração dos dois números é: " + (value1 - value2);
}

function multiplication(value1, value2){
    return "A multiplicação entre os números é: " + (value1 * value2);
}

function division(value1, value2){
    return "A divisão entre os dois números é: " + (value1 / value2).toFixed(2);
}

function rest(value1, value2){
    return "O resto da divisão entre os dois números é: " + value1 % value2
}

function par(value1, value2){
    let sum = value1 + value2
    if(sum % 2 == 0){
        return "A soma dos dois números é PAR: "
    }else{
        return "A soma dos dois números é IMPAR: "
    }
}

function equalNumbers(value1, value2){
    if(value1 == value2){
        return "Os números inseridos são iguais"
    }else{
        return "Os números inseridoss são diferentes"
    }
}