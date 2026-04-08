/*
let a = 'A'
let b = 'B'
let c = 'C'

const numeros = [1, 2, 3]; // (Lembrar de usar ; na criação de Arrays)

// Posso atribuir valores a várias variáveis de uma só vez usando desestruturação  
[a, b, c] = numeros

console.log(a, b, c)
*/

// ---------------------------------------------------------------------------------------------

const numeros = [16, 22, 35, 43, 52, 61, 78, 84, 97]; // Array com os valores

// n1, n2 e n3 são as variáveis que criei, e todas serão const pois na declaraçao por Array elas são const, após isso cada valor no índice de 'numeros' será correspondente à variável no Array criado,

// Então, n1 = 1, n2 = 2 e n3 = 3
// O restantes dos valores serão ignorados e não serão atribuídos
const [n1, n2, n3] = numeros 

console.log(n1, n2, n3)

// Caso queira o resto da Array, posso atribuir numa variável com o prefixo ...
const itens = ['Lápis', 'Caneta', 'Livro', 'Caderno', 'Cadeira', 'Mesa', 'Piloto']
const [pri, seg, ter, qua, ...resto] = itens
console.log(pri, seg, ter) // Os 3 primeiros valores do array itens ([0][1][2])
console.log(resto) // Retorna todos os valores que não foram atribuídos a nada no Array

// Caso deseje pegar apenas certos valores dentro do Array e não em ordem, é possível também
// Basta deixar vazio com vírgulas os itens que desejo pular
const [,caneta, ,caderno, , ,piloto] = itens
console.log(caneta, caderno, piloto)