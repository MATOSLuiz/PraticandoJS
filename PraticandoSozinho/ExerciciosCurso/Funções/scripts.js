//EX 16 imprimir Hello world no console com uma função

function olaMundo() {
    console.log("Hello World!");
}

olaMundo();

console.log("\n");
console.log("\n");
console.log("\n");

//EX 17 funcao idade

function mostraIdade(idade) {
    console.log(`Você tem ${idade} anos!`)
}

mostraIdade(15);

console.log("\n");
console.log("\n");
console.log("\n");

// EX 18 soma de dois numeros

function soma(a, b) {
    return a + b;
}

console.log(soma(20,25));

console.log("\n");
console.log("\n");
console.log("\n");

// //EX 19 numero aleatorio

function numeroAleatorio(num) {
    return Math.floor(Math.random() * num) + 1;
}

console.log(numeroAleatorio(50));

console.log(numeroAleatorio(100));

console.log(numeroAleatorio(500));

console.log("\n");
console.log("\n");
console.log("\n");

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

console.log("\n");
console.log("\n");
console.log("\n");


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

console.log("\n");
console.log("\n");
console.log("\n");

//eX 22 NUMERO Negativo RETORNA POSITIVO

function numeroPositivo(numNegativo) {
    return Math.abs(numNegativo);
}

console.log(numeroPositivo(-5));

console.log("\n");
console.log("\n");
console.log("\n");

//EX 23 checar tamanho texto

function checaTexto(texto) {
    if(texto.length > 10) {
        console.log("Esse texto é muito longo!");
    } else {
        console.log("Texto dentro do limite!");
    }
}

checaTexto("Meu nome é luiz")
checaTexto("Oi")

console.log("\n");
console.log("\n");
console.log("\n");

// Ex 24 potencia (duas maneiras de resolver)

function potencia(base, expoente) {
    // return Math.pow(base,expoente);
    return base ** expoente;
}

console.log(potencia(3,4));

console.log("\n");
console.log("\n");
console.log("\n");

//Ex 25 loop com numeros pares

function imprimePar(number) {
    for(let i = number; i >= 0; i--) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

console.log(imprimePar(10));