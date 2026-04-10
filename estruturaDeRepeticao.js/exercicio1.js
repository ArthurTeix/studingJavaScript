// funcao de receber dois números e dizer o maior

function maxNum1(num1, num2){ // Usando function comum
    console.log(`O maior número é ${Math.max(num1, num2)}`);
}

const maxNum2 = (num1, num2) => (num1 > num2) ? num1 : num2 // Usando Arrow Function

maxNum1(4,8)
console.log(maxNum2(15, 14))