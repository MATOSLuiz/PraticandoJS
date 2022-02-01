// Criando e adicionando elmentos

// createElement
const div = document.createElement('div')

div.innerHTML = '<h1>BEM VINDO</h1>'

const body = document.querySelector('body')

// (final)append (começo)prepend

// body.append(div)
body.prepend(div)


// insertBefore

const header = document.querySelector('header')

body.insertBefore(div, header.nextSibling)