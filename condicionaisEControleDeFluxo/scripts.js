// Control flow

//se quiser jogar 
// console.log('entrar na fila')

// //se nao
// console.log('nao entre na fila')

//if e else

speedCar = 126

allowedSpeed = speedCar <= 120
toleratedSpeed = speedCar <=125

if(allowedSpeed && toleratedSpeed) {
    console.log('Pode passar')
} else {
    console.log('Saia da via')
}

//Calculadora com switch

function calculate(number1, operator, number2){
    let result = 0 

    switch(operator) {
        case "+":
        result = number1 + number2
        break

        case "-":
        result = number1 - number2
        break

        case "*":
        result = number1 * number2
        break

        case "/":
        result = number1 / number2
        break

        default:
        "Não implementado"
    }

    return result
}

console.log(calculate(4, "+", 10))


// throw

function sayMyName(name = '') {
    if (name === '') {
        throw 'Precisa falar meu nome'
    }
}

// try...catch

try {
    sayMyName()
} catch(e) {
    console.log(e)
}