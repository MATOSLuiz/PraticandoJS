// Object

// const person = {
//     name: 'Luiz',
//     age: 18,
//     weight: 61,
//     isHarryPotterFan: true
// }

// console.log(`${person.name} is a ${person.isHarryPotterFan} Harry Potter fan!`)


// Array

// const names = [
//     'Luiz',
//     'Roberto',
//     'Lucas'
// ]

//accessing values inside an array
// console.log(names[2])

//EXERCICIOS ROCKETSEAT

//1- Declare uma variavel de nome weiht
//let weight

//2- Que tipo de dado é a variável acima?

//console.log(typeof weight)

/*3- declare uma variavel e atribua valores pra cada um dos dados:
    name: String
    age: Number (integer)
    stars: Number (float)
    isSubscribed: Boolean
*/

// let name = "Luiz"
// let age = 18
// let stars = 4.5
// let isSubscribed = false

// 4- A variavel student abaixo é de que tipo de dado?
//Object

//4.1- Atribua a ela as mesmas propriedades do ex 3.

//4.2- Mostre no console a seguinte mensagem <name> tem <stars> estrelas

const student={
    name: 'Luiz',
    age: 18,
    stars: 4.5,
    isSubscribed: false
}

    console.log(`${student.name} tem ${student.stars} estrelas`)

// 5- Declare uma variável do tipo array de nome students vazia

    let students = []

// 6 - Reatribua valor para a variavel acima colocando dentro dela o objeto student da questao 4

    students = [
        student
    ]

    console.log(students)

// 7 - coloque no console o valor da posicão zero do Array acima

    console.log(students[0])

// 8 - Crie um novo student e coloque na posicão 1 do Array students

const ana = {
    name: "Ana",
    age: 17,
    stars: 5,
    isSubscribed: true
}

students = [
    student, 
    ana
]

console.log(students[1])

// 9 - Sem rodar o código responda qual é a reposta do código abaixo e por que? Após isso rode o codigo e descubra se acertou.

// Resposta: vai imprimir um undefined pois acontece um hoisting o js sabe que existe a variavel a porem como ela foi declarada la embaixo ele joga o a pra cima só que sem o seu valor desse jeito 'var a'

console.log(a)
var a = 1

//Protoype

//protoype-based language
//prototype chain
//__photo__

// O JavaScript possui uma característica chamada Prototype, que é uma série de funcionalidades e atributos que já existem nativamente em diversos tipos de dados, que são lidados como objetos.

//Type conversion vs Type coersion

// Changing from one data type to other

// console.log(Number('9') + 6)

//Manipulating strings and numbers 

// transform string into number and number into string

// let string = "123"
// let number =  123

// console.log(Number(string))
// console.log(String(number))

// Count how many characters are in a word and how many digits in a number

// let word = "Luiz"
// let numero = 457

// console.log(word.length)
// console.log(String(numero).length)

//transform a broken number to 2 decimal places and change comma to dot

let number = 542.5874
console.log(number.toFixed(2).replace(".", ","))

//convert lowercase letters to uppercase. do the opposite

let word = "Programar é lindo"
console.log(word.toLowerCase().toUpperCase())

//Separate a text that has spaces, in a new array where each text is a position of the array. After that, turn the array into a text separated by _

let frase = "O amor é lindo"
let fraseseparada = frase.split(" ")
console.log(fraseseparada.join("_").toUpperCase())

// Make sure the text contains the word "amor"

console.log(frase.includes("amor"))

// Create array with constructor

let myArray = new Array('l', 'u', 'i', 'z')
console.log(myArray)

// contain elements from one array

console.log(['l', 'a', 'w'].length)

// convert one caracters chain in elements from one array

let palavra = "pãozinho"

console.log(Array.from(palavra))

//MANIPULANDO ARRAYS
let techs = ["html", "css", "bootstrap"]
//Remover um do fim 
techs.pop()
//Remover do começo
techs.shift()
// Adicionar no começo
techs.unshift("Js")
// Adicionar no fim
techs.push("react")
//pegar somente alguns elementos do array
techs.slice(1,2)
//remover 1 ou mais items em qualquer posição do array
techs.splice(1,1)
//encontrar a posição de um elemento no array
let index = techs.indexOf('css')

console.log(index)