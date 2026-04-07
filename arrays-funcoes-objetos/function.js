function soma(x = 2, y = 1){   // Seguem a mesma lógica do python
    return x + y
}
console.log(soma(5, 4))


const raizQuadrada = function(num){ // Em Js posso criar uma função dentro de uma variável
    return num ** 0.5
}; // nesse caso é obrigatório usar ;

console.log(raizQuadrada(9),  raizQuadrada(16), raizQuadrada(25))

// Forma mais moderna de declarar uma função atualmente, são as 'Arrow Functions', o nome vem do símbolo de => parecer uma flecha.
// Permite diminuir linhas de código e acelerar na produção
const raizCubica = (n) => n ** (1/3) 
/*
(n): é o meu parâmetro  |   =>: é o que substitui a palavra function (minha Arrow)  |   n**(1/3): meu return
*/
console.log(raizCubica(216).toFixed(0), raizCubica(343).toFixed(0), raizCubica(512).toFixed(0)) 