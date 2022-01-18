//Estrutura de repetição
//for 
// break para a execução do loop
// continue - pula a execução do momento

for( let  i = 50; i < 100; i++) {
    if(i === 95) {
        break;
    }

    console.log(i)
}

//while

let i = 0

while(i < 10) {
    console.log(i)

    i++;
}

//for...of

let name = "Luiz"
let names = ["Luiz", "Carlos", "Lucas"]

// for(let char of name ) {
//     console.log(char)
// }

for( let position of names) {
    console.log(position)
}

//for...in cria um loop emcima de um objeto pegando suas propriedades

let person = {
    name: "Luiz",
    age: 18,
    weight: 61.8
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}


