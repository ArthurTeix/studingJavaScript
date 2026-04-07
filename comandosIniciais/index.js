/*
        CONCEITOS INICIAIS COM JAVASCRIPT

Number -> int e float
String -> texto comum ("", '', ``) usar crase é mais moderno e permite concatenar ${variavel}
Bool -> True ou False

+ -> concatenar e somar
-, *, /, **, % -> subtrair, multiplicar, dividir, potenciação e resto da divisão

-----------------------------------------------------------------------------------*/ 

/*        COMANDOS DO NAVEGADOR (NAO FUNCIONAM NO NODEjs)          */
// alert exibe uma mensagem na tela
// confirm exibe duas opções (cancelar e OK), sendo uma False e outra True
// prompt é um input de valores, se não declarar o tipo antes, será considerado string

// SOMA DE DOIS VALORES PELO NAVEGADOR
const num1 = Number(prompt("Digite um número: "));
const num2 = Number(prompt("Digite outro número: "));

alert(`A soma de ${num1} e ${num2} é igual a: ${num1 + num2}`);