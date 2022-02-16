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

