//Exercicio 26 

let amigos = ["Gabriel Viccari", "Darlan", "Victor", "Mesaque", "Lucas"];

console.log(amigos[0]);
console.log(amigos[2]);
console.log(amigos[3]);

console.log("\n");
console.log("\n");


//Exercio 27

let nomeSobrenome = ["Luiz", "Matos"];

let nomeCompleto = ["Luiz", "Henrique", "Soares", "Matos"];

console.log(nomeSobrenome.length);
console.log(nomeCompleto.length);

console.log("\n");
console.log("\n");

// Exercicio 28-29

const onibus = {
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
}

console.log(onibus.rodas)
console.log(onibus.limitePassageiros)
console.log(onibus.portas)

console.log("\n");
console.log("\n");

//29

onibus.janelas = 20;

delete onibus.rodas;

console.log(onibus);
console.log(onibus.janelas);

//Exercicio 30 includes

let nomes = ["Luiz", "Claudomiro", "Estefane","Estela", "Graziela"];

if(nomes.includes("Luiz")) {
    console.log("O nome Luiz Está incluso no Array!");
} else {
    console.log("Nome não está incluso no Array")
}




