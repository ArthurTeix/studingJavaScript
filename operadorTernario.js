// ? condição verdadeira
// : condição falsa
// (condição) ? valor para verdadeiro : valor para falso

const pontosUsuario = 1000

// if (pontosUsuario >= 999) {
//     console.log("Usuário vip")
// } else {
//     console.log('Usuário comum')
// }

const nivelUsuario = pontosUsuario >= 999 ? "Usuário VIP" : "Usuário Comum" // essa linha fez o mesmo que as quatro de cima

console.log(nivelUsuario)