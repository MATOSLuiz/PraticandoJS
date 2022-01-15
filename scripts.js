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