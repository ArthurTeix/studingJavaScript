function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

const timer =  setInterval(function(){ // setInterval() é uma função que executa um código em um intervalo de tempo definido em milisegundos, ou seja, ele vai executar a função a cada 1000 milissegundos (1 segundo)
    console.log(mostraHora())
}, 1000)

setTimeout(function(){ // setTimeout() é uma função que executa um código após um determinado tempo, ou seja, ele vai executar a função após 5000 milissegundos (5 segundos)
    clearInterval(timer)}, 4000)

setTimeout(function () {
    console.log("Olá Mundo!") // só será executado 6seg após iniciar o código
}, 6000) 