// For clássico - Geralmente utilizado para iterar sobre arrays, mas pode ser utilizado para outras situações (Como strings, por exemplo)
// 1º parâ: variável de controle (casualmente i de index)
// 2º parâ: condição a ser testada para continuar o laço
// 3º parâ: incremento da variável
// todos separados por ;
const alunos = ['João', 'Maria', 'José', 'Ana', 'Caio']

for (let i = 0; i < alunos.length; i++){
    console.log(`${alunos[i]}`)
}