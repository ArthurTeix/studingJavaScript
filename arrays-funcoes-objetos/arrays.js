// marcados por índice tambem, iniciando do 0
//                 0       1       2       3
const alunos = ['João', 'Maria', 'José', 'Ana']

console.log(alunos) // Imprime o array completo

alunos[0] = "Arthur"   // Alterar um elemento
alunos[4] = "Otávio"   // Adicionar um elemento no índice, caso o índice não exista

alunos.push("Miguel")  // Adiciona ao fim
alunos.unshift("Kayo") // Adiciona ao início (índice 0)

console.log(alunos)

alunos.pop() // Elimina o último item (Miguel)
alunos.shift() // Elimina o primeiro item (Kayo)

console.log(alunos)

// delete alunos[2]  -> Deleta um item sem alterar os índices do Array e o índice se torna undefined

console.log(alunos)

console.log(alunos.length) // Exibe o a quantidade de itens do Array

console.log(alunos.slice(0, 3)) // Corta o Array e exibe do índice do 1º parâm até o índice o 2º parâm menos 1

console.log(typeof alunos) // Retorna que Array é um objeto
console.log(alunos instanceof Array) // Retorna se meu elemento é um Array ou não (True ou False), nesse caso é True



