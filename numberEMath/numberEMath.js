let num1 = 100
let num2 = 2.52832
let teste;

teste = num1.toString() // função usada para passar valores para String
console.log(typeof teste)

teste = num1.toString(2) // (2) exibe o valor em binário
console.log(teste)

console.log(num2.toFixed(2)) // função usada para escolher quantas casas decimais exibir
console.log(num2.toFixed(4))

console.log(Number.isInteger(num1)) // função para checar se o valor atribuído é inteiro
console.log(Number.isInteger(num2))

// OBJETO MATH

let num3 = 9.5467
// let num4 = Math.floor(num3) -> arredonda para baixo
// let num4 = Math.ceil(num3) -> arredonda para cima
// let num4 = Math.round(num3) -> arredonda para o inteiro mais próximo
// console.log(Math.max(1, 7, 3, 9, 26)) -> exibe o maior número do conjunto
// console.log(Math.min(1, 7, 3, 9, 26)) -> exibe o menor número do conjunto
