function meuEscopo(){
    const form = document.querySelector('.form') // Selecionando o meu forms para manipular
    const resultado = document.querySelector('.resultado') // Selecionando a div resultado para exibir o resultado do forms

    const pessoas = []

    function recebeEventoForms(evento){
        evento.preventDefault() // Previne o comportamento padrão do forms (recarregar a página)

        const nome = form.querySelector('.nome') // Pegando nome
        const sobrenome = form.querySelector('.sobrenome') // Pegando sobrenome
        const peso = form.querySelector('.peso') // Pegando peso
        const altura = form.querySelector('.altura') // Pegando altura

        // CRIANDO OBJETO E ADICIONANDO NO ARRAY DEPOIS
        /*
        const novaPessoa = {
            'nome': nome,
            'sobrenome': sobrenome,
            'peso': peso,
            'altura': altura
        }

        pessoas.push(novaPessoa) 
        
        resultado.innerHTML += `<p>${pessoas[pessoas.length - 1]['nome']} ${pessoas[pessoas.length - 1]['sobrenome']} ${pessoas[pessoas.length - 1]['peso']} ${pessoas[pessoas.length - 1]['altura']}</p>`
        */

        // CRIANDO OBJETO JA DENTRO DO ARRAY
        pessoas.push({
            nome: nome.value, // Para pegar o valor do input, preciso usar a propriedade .value
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
        console.log(pessoas)
    }

    form.addEventListener('submit', recebeEventoForms) // observa o evento submit do botão do forms
}

meuEscopo()
