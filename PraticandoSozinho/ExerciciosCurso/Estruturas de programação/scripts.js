// Ex 6 Variaveis

let idade = 19;
let nome = "Luiz";
let vivo = true;

console.log(typeof vivo);
console.log(typeof nome);
console.log(typeof idade);


console.log("\n");
console.log("\n");
console.log("\n");

//Ex 7 Balada

if(idade >= 18) {
    console.log("Pode entrar!");
} else {
    console.log("Desculpe, você não tem idade!")
} 

console.log("\n");
console.log("\n");
console.log("\n");

//Ex 8 constante com if

const Nome = "Luiz";

if(Nome == "Luiz"){
    console.log(`Olá ${Nome}, Bem vindo!`)
}

console.log("\n");
console.log("\n");
console.log("\n");

//Ex 9 Math 2 3 18 expoente 2

console.log(` 2 ao quadrado é ${Math.pow(2,2)} 3 ao quadrado é ${Math.pow(3,2)} 18 ao quadrado é ${Math.pow(18,2)}`);

console.log("\n");
console.log("\n");
console.log("\n");

//Ex 10 velocidade permitida

let velocidade = 50;

if(velocidade <= 80) {
    console.log("Você não levou multa")
} else {
    console.log("Você foi multado, tudo já está registrado no Dentran!")
}

console.log("\n");
console.log("\n");
console.log("\n");

//Ex 11 dirigir

let cnh = false;

if(idade >= 18 && cnh == true) {
    console.log("Você pode dirigir");
} else if(idade >= 18 && cnh == false) {
    console.log("Você pode tirar sua habilitação, mas por enquanto não pode dirigir");
} else {
    console.log("Você ainda não tem idade para dirigir!");
}

console.log("\n");
console.log("\n");
console.log("\n");

//Ex 12 while 0-10

let num = 0;

while(num <= 10) {
    console.log(num);
    num += 1
}

console.log("\n");
console.log("\n");
console.log("\n");

//Ex 13 for 100-50

for(i = 100; i >= 50; i--) {
    console.log(i);
}




