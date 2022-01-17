// Propriedade delete

// Operator Unary delete 

let person = {
    name: "Luiz",
    age: 18
}

delete person.age
console.log(person , "A idade foi removida")

//Operadores aritméticos

// Multiplicação
console.log(5*5)
// Divisão
console.log(5/4)
// Soma
console.log(4+75)
// Subtração
console.log(45-8)


// Resto da divisão
console.log(11 % 3)

//incremento ++ 
let increment = 0
console.log(increment++)
console.log(increment)

//decremento
let decrement = 0
console.log(decrement--)
console.log(decrement)

//exponencial
console.log(9**2)

//Grouping operator ()

let total = (12 + 8) * 8
console.log(total)

//OPERADORES DE COMPARAÇÃO

//Irá comparar valores e retornar true or false

let one = 1
let two = 2

// == igual a 
console.log(two == 1) //false

// diferente de !=

console.log(two != 2) //false

// === estritamente igual a: verifica no valor e no tipo

console.log(one === 1)

//!== estritamente diferente de 

console.log(one !== 2)

// OPERADORES DE MAIOR E MENOR

// > maior que
console.log(one > 1)

// >= maior igual a 
console.log( one >= 1)

// < menor que 
console.log(one < 1)

// <= menor ou igual a 
console.log(one <= 1)

//Operadores de atribuição (Assignment)

let x

//atribuição
x = 2
console.log(x)

//atribuição com soma
// x = x + 2
x += 2

console.log(x)

//com sub 

x -= 2

//com multiplicação

x *= 2

//com divisão

x /= 2

//resto

x %= 2

//exponencial

x **= 2


//OPERADORES Lógicos

// 2 valores booleanos, quando verificamos, resultará em true or false

let pao = true
let manteiga = true

//AND &&
console.log(pao && manteiga)

// OR ||
console.log(pao || manteiga)

// NOT ! negando algo ele se torna falso ou negando um false se torna true
console.log(!pao)


//OPERADOR TERNÁRIO
//Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.[

// se for verdade escreva isso ? senão : escreva isso

const niceBreakFast = pao || manteiga ? 'Café Top' : 'Café não top'

console.log(niceBreakFast)

let age = 18

const canDrive = age >= 18 ? 'Pode dirigir' : "can't drive"
console.log(canDrive)

//Operadores para String 

//comparação
console.log('a' == 'b')

//concatenação
console.log('a' + 'i')

let surname = "Soares"
surname += " De Matos"

console.log(surname)


//Falsy e truthy

//O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops).

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

// já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops)

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

/* De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 

*/
