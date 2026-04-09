// For in -> Lê os índices

const frutas = ["Maça", "Uva", "Pera"]

for (let i in frutas){
    console.log(i) // retorna os índices
}

for (let index in frutas){ // posso atribuir qualquer nome a variável
    console.log(frutas[index]) // retorna os valores
}

const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
}

for (let i in pessoa){
    console.log(i) // retorna os índices
}

for (let index in pessoa){
    console.log(index, pessoa[index]) // retorna o index e os valores
}