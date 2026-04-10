/* 
SE O NUMERO FOR DIVISIVEL POR 3 -> return Fizz
SE O NUMERO FOR DIVISIVEL POR 5 -> return Buzz
SE O NUMERO FOR DIVISIVEL POR 3 e 5 -> return FizzBuzz
SE O NUMERO NÃO FOR DIVISIVEL POR 3 ou 5 -> return (O próprio número)
CHECAR SE REALMENTE É UM NÚMERO
PERMITIR APENAS DE 1 A 100
*/

function fizzBuzz(num) {
    if (typeof num !== 'number') return 'Não é número'; // checando se é um valor de número
    if (num < 1 || num > 100) return 'Fora do intervalo';

    const fizz = num % 3 === 0;
    const buzz = num % 5 === 0;

    if (fizz && buzz) return 'FizzBuzz';
    if (fizz) return 'Fizz';
    if (buzz) return 'Buzz';

    return num;
}

console.log(fizzBuzz(15))