const num = Number(prompt("Digite um número: "))
const numTitle = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numTitle.innerHTML = num

texto.innerHTML += `<p>SEU NÚMERO É ${num}</p>`;
texto.innerHTML += `<p>Raiz Quadrada: ${(num**(1/2)).toFixed(2)}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É um NaN: ${Number.isNaN(num)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;