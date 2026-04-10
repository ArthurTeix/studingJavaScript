function random (min, max){
    r = Math.random() * (max-min) + min
    return Math.floor(r)
}
const min = 1
const max = 10
let rand = random(min, max)

while (rand !== 8) { // WHILE checa a condição antes de executar o bloco de código, ou seja, se a condição for falsa, o código dentro do while não será executado
    rand = random(min, max)
    console.log(rand)
}

console.log('#########')

do { // DO WHILE executa o bloco de código pelo menos uma vez, e depois checa a condição. Se a condição for verdadeira, o código dentro do do while será executado novamente
    rand = random(min, max)
    console.log(rand)
} while (rand !== 6)