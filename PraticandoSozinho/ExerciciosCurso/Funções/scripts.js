//EX 16 imprimir Hello world no console com uma função

function olaMundo() {
    console.log("Hello World!");
}

olaMundo();

//EX 17 funcao idade

function mostraIdade(idade) {
    console.log(`Você tem ${idade} anos!`)
}

mostraIdade(15);

// EX 18 soma de dois numeros

function soma(a, b) {
    return a + b;
}

console.log(soma(20,25));

// EX 18 soma de dois numeros

function soma(a, b) {
    return a + b;
}

console.log(soma(20,25));

// //EX 19 numero aleatorio

function numeroAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio(50));

console.log(numeroAleatorio(100));

console.log(numeroAleatorio(500));

//ex 20 autoescola

function autoEscola(idade) {
    if(idade < 18) {
        console.log("Você não pode entrar na autoescola ainda!");
    } else {
        console.log("Você ja pode entrar na autoescola!");
    }
}

autoEscola(18);

autoEscola(16);

autoEscola(22);


//Ex 21 mostrar tipo de dado


function dataType(dado) {
    if(typeof dado === 'boolean') {
        console.log("Este dado é um boolean");
    } else if(typeof dado === 'number') {
        console.log("Este dado é um Number");
    } else if(typeof dado === 'string') {
        console.log("Este dado é uma string");
    }

}

dataType(5);
dataType("Testando");
dataType(false);

//eX 22 NUMERO Negativo RETORNA POSITIVO

function numeroPositivo(numNegativo) {
    return Math.abs(numNegativo);
}

console.log(numeroPositivo(-5));

