// Eventos

function alertaClick() {
    alert('Você Clicou')
}

function alertaMouse() {
    alert('Você passou o mouse')
}

// Eventos de teclado

const input = document.querySelector('input')

input.onkeydown = function() {
    console.log('Hi')
}

//Adicionando eventos via JS

const h2 = document.querySelector('h2')

h2.addEventListener('click', alertaClick)
input.addEventListener('focus', function() {
    console.log('to no input')
})

// argumento Event

const evento = document.querySelector('input')

evento.onkeydown = function(event) {
    console.log(event.currentTarget.value)
}