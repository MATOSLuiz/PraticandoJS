const button = document.getElementById('openModal')
const modal = document.getElementById('dialog')

button.addEventListener('click', abrir)

function abrir() {
    modal.removeAttribute('class')
}

document.addEventListener('keydown', function(event){
    const isEsc = event.key === "Escape"

    if(isEsc) {
        modal.setAttribute('class', 'invisible')
    }
})
