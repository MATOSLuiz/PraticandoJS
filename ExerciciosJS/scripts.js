// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if(scoreA) {
        scoreFinal = "A"
    } else if(scoreB) {
        scoreFinal = "B"
    } else if(scoreC) {
        scoreFinal = "C"
    } else if(scoreD) {
        scoreFinal = "D"
    } else if(scoreF) {
        scoreFinal = "F"
    } else {
        scoreFinal = "Nota inválida"
    }

    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(100))
console.log(getScore(82))
console.log(getScore(72))
console.log(getScore(62))
console.log(getScore(15))

// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []
// Agora, crie uma função que irá calcular o total de receitas e 
// despesas e irá mostrar uma mensagem se a família está com 
// saldo positivo ou negativo, seguido do valor do saldo.

let familyBalance = {
    revenues: [1000, 5000],
    expenditures: [575, 125, 5000]
}

function sum(array) {
    let total = 0;

    for( let value of array) {
        total += value
    }

    return total
}

function calculateBalance() {
    const calculateRevenues = sum(familyBalance.revenues)
    const calculateExpenditures = sum(familyBalance.expenditures)

    const total = calculateRevenues - calculateExpenditures

    const itsOk = total >= 0

    let balanceText = "Negativo"

    if (itsOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total}`)
}

calculateBalance()


//Crie uma função que receba uma string em celsius ou fahrenheit
//e faça a transformação de uma unidade para outra 
//C = (F - 32) * 5/9 
//F = C * 9/5 + 32

//trasnform('50F)

function convertCelsius(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }

    // fluxo ideal Fahrenheit to Celsius
    let updatedDegree = Number(degree.toUpperCase().replace("F",""));
    let formula =  fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    //fluxo alternativo Celsius to Fahrenheit
    if(celsiusExists) {
         updatedDegree = Number(degree.toUpperCase().replace("C",""));
         formula =  celcius => celcius * 9/5 + 32  
         degreeSign = 'F'  
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(convertCelsius('50C'))
} catch(error) {
    console.log(error.message)
}

/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/


