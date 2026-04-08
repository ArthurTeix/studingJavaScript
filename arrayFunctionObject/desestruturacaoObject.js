const pessoa = {
    nome: 'Arthur',
    idade: 18,
    cidade: 'Recife',
    endereco: {
        rua: 'Rua A',
        numero: 123
    }
}

const { nome } = pessoa // Como o nome do atributo 'nome' já é o nome da minha variável, apenas preciso de { nome }
console.log(nome) 

const { idade, altura = 'não informada' } = pessoa // Posso atribuir valores padrões, caso não exista
console.log(idade, altura)

const { nome: teste} = pessoa // Posso alterar o nome da variável criada, apenas declarar qual chave estou me referindo
console.log(teste)

const { endereco: {rua: r, numero: num} } = pessoa
console.log(r, num)

const { nome: nom, idade: id, ...resto} = pessoa
console.log(resto) // Exibe os dados não selecionados