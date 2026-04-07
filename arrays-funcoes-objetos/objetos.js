/* FORMA CASUAL DE CRIAÇÃO DE OBJETOS

const pessoa1 = {    // criação do meu objeto pessoa
    nome: 'Arthur',
    sobrenome: 'Teixeira',
    idade: 18
}

console.log(pessoa1.nome) // como exibir um dado específico
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade) */

// --------------------------------------------------------------
/*          CRIAR OBJETOS USANDO FUNÇÕES

function criarPessoa(nome, sobrenome, idade) {
    return {
        nome: nome, // Para evitar esse tipo de repetição (nome: nome) posso fazer de outra forma
        sobrenome: sobrenome,
        idade: idade
    }
} */

function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade} //maneira mais simples e funcional
}

const pessoa1 = criarPessoa('Arthur', 'Teixeira', 18)
console.log(pessoa1.sobrenome)

// --------------------------------------------------------------
const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Teixeira',
    idade: 18,

    fala(){ // Dentro do meu objeto posso criar métodos com diferentes funcionalidades

        // 'this' representa que estou dentro do objeto me referindo a ele mesmo
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}, e tenho ${this.idade} anos.`)
    },

    maisIdade(){
        this.idade++
    }
}

pessoa.fala()
pessoa.maisIdade() // Incrementou +1 em idade
pessoa.fala() // Alterou a fala
pessoa.maisIdade() // Incrementou +1 em idade
pessoa.fala() // Alterou a fala
