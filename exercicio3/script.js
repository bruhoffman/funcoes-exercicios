function somar(num1, num2) {
    return num1 + num2
};

function subtrair(num1, num2) {
    return num1 - num2
};

function multiplicar(num1, num2) {
    return num1 * num2
};

function dividir(num1, num2) {
    return num1 / num2
};

const num1 = Number(prompt("Digite um número:"));
const num2 = Number(prompt("Digite um segundo número:"));

const resultadoSoma = somar(num1, num2);
const resultadoSubtracao = subtrair(num1, num2);
const resultadoMultiplicacao = multiplicar(num1, num2);
const resultadoDivisao = dividir(num1, num2);

console.log("O resultado da soma é ", resultadoSoma);
console.log("O resultado da subtração é ", resultadoSubtracao);
console.log("O resultado da multiplicação é ", resultadoMultiplicacao);
console.log("O resultado da divisão é ", resultadoDivisao);