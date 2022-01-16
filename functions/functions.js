// example of function usage: avoid code repetitions

//create a pet name app

//function statement
function namePet() {
    console.log('Hulk')
    console.log('Apollo')
    console.log('Thor')
}

//if I want to display those pet names on the screen again I just need invoke the function 
namePet()
namePet()


// function expression 
// function anonymous

//                  parameters
const sub = function(number1, number2) {
    console.log(number1 - number2)
}

//  Arguments
sub(8,5)

//function scope

let subject 

function createIt() {
    subject = 'study'
}

console.log(subject)
createIt()
console.log(subject)

//function hoisting

sayMyName()

function sayMyName() {
    console.log('Luiz')
}

//arrow function 

const sayMyAge = () => {
    console.log(18)
}

sayMyAge()

//callback function

function sayMyCity(city) {
    city()
}

sayMyCity(
    () => {
        console.log('Estou em uma callback')
    }  
)

// Fucntion() constructor
// expressão new 
//cria um novo objeto 
//this keyword

function Person(name) {
    this.name = name
    this.eat = function() {
        return this.name + " está comendo"
    }
}

const luiz = new Person("Luiz")

console.log(luiz)
console.log(luiz.eat())
