// as strings em js tem indices
//            01234567
let string = 'Um texto para usar de testes'

console.log(string[4]) // Posso escolher qual indice exibir usando []
console.log(string[40]) // Caso tente chamar um index inexistente vai retornar undefined

console.log(string.indexOf('texto')) // indexOf me passa onde tal palavra ou letra começou
console.log(string.indexOf('x'))
console.log(string.indexOf('t', 4)) // posso também dizer a partir de qual index começa a busca
console.log(string.indexOf("camisa")) // caso não encontre o valor, retorna -1

console.log(string.lastIndexOf('t')) // lastIndexOf faz a busca de trás para frente

console.log(string.replace('Um', 'Outro')) // substitui o primeiro parâmetro pelo segundo na minha str
console.log(string.replace(/t/g, '#')) // substitui todos os 't' por # 

console.log(string.length) // retorna o tamanho da minha string (começa do 1, então o último index é o lenght - 1)

console.log(string.slice(3,8)) // vai fatiar minha str, começando pelo 1º parâmetro e terminando no 2º+1 pelo índice

console.log(string.split(' ')) // separa a str num array de acordo com o caracter que eu escolher, nesse caso vai separar pelos espaços
console.log(string.split(' ', 3)) // também posso dizer até qual indice menos um o meu array vai, nesse caso vai até o index 2

console.log(string.toLowerCase()) // toda str para minúscula
console.log(string.toUpperCase()) // toda str para maiúscula