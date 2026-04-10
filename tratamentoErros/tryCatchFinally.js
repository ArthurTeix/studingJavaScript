/* try {
    // EXECETARÁ QUANDO NÃO HOUVER ERRO

} catch {
    // EXECETARÁ QUANDO HOUVER ERRO
} finally {
    // SEMPRE SERÁ EXECUTADO
} */

    // EXEMPLO
try {
    console.log('Abra o arquivo')
    console.log('Manipule o arquivo') // caso haja erro aqui, o arquivo não vai fechar
    console.log('Feche o arquivo')
} catch (err) {
    console.log('Tratando o erro') // aqui vai apenas tratar o erro, então o arquivo ficaria aberto
} finally {
    console.log('Feche o arquivo (eu sempre sou executado)') // então o 'finally', que sempre será executado (com ou sem erros), vai fecha
} 

    