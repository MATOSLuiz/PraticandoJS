// Navegando pelos elementos

// parentNode
// parentElement

const body = document.querySelector('body')

console.log(body.parentElement)
console.log(body.parentNode)

// pegando elementos filhos

// childNodes children
// firstChild firstElementChild
// lastChild lasElementChild

const element = document.querySelector('header')

console.log(element.lastElementChild)

// buscando irmãos 

// nextSibling nextElementSibling
// previousSibling nextElementSibling

console.log(element.nextElementSibling)
console.log(element.previousElementSibling)