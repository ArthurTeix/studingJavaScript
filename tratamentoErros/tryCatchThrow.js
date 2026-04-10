// usado para emitir mensagens em caso de crash do programa, para evitar mensagem de erro na tela do usuário (usado sempre que um programa possa retornar um erro)

/* try { // tente
    console.log(soma('oi',9)) // tente executar minha função (ou qualquer coisa)
} catch (err) { // passo um parâmetro (nomalmente 'e' ou 'err' de erro), que é meu motivo de crash
    console.log("Função inexistene") // retorne isso
} */ 

function soma(x, y){
    if ((typeof x !== 'number') || (typeof y !== 'number')){
        throw("X e Y precisam ser números"); // throw é usado para lançar um erro, ou seja, para emitir uma mensagem de erro personalizada, que pode ser capturada por um bloco try-catch. Ele interrompe a execução normal do código e passa a mensagem de erro para o bloco catch mais próximo, onde pode ser tratada ou exibida para o usuário.
    } 
    
    return x + y
}

try {
    console.log(soma(9, 8))
    console.log(soma('cinso', 8))
} catch (err) {
    console.log(err) // aqui o parâmetro 'err' recebe a mensagem de erro lançada pelo throw, e é exibida para o usuário
}
