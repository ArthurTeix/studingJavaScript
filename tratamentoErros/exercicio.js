function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError("Esperando instância do objeto 'Date'")// caso não seja enviada uma data
    }

    if (!data){ // se mandar vazio, retorna hora atual
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // tirando formatação americana de AM e PM
    })
}

try{
    const data = new Date('01-01-1970 22:32:45')
    const hora = retornaHora(data)
    console.log(hora)
} catch (err) { 
    // Mensagem de erro
} finally {
    console.log("Tenha um bom dia")
}