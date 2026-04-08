const agora = new Date() // Data e hora atual
console.log(agora.toString())

// Os parâmetros são: ano, mês, dia, hora, min, seg (os meses vão de 0 até 11)
const dataAniv = new Date(2008, 2, 11, 19, 30, 22)

console.log(dataAniv.toString()) // O método (toString) mostra a data no fuso horário local do sistema e não adiciona o fuso horário

// Posso omitir até os parâmetros das horas, mas ano e mês são obrigatórios
const dataTest = new Date(2010, 4) // O dia se torna 1 e o horário 00:00:00
console.log(dataTest.toString())

// Também posso passar os valores por meio de Str
// Nesse caso a ordem fica: ano, mês (realmente o mês, de 0-12), dia, hora e minuto (seg e miliseg são opcionais)
const dataP = new Date('1978-08-18 11:00')
console.log(dataP.toString())

// Posso pegar partes isoladas das minhas datas
const dataM = new Date('1983-11-27 21:45:30.100')
console.log(dataM.toString())
console.log("Dia", dataM.getDate())
console.log("Mês", dataM.getMonth() + 1) // +1 pois o mês de janeiro é o 0, mas o padrão de entendimento é janeiro como 1
console.log("Ano", dataM.getFullYear())
console.log("Hora", dataM.getHours())
console.log("Minuto", dataM.getMinutes())
console.log("Segundo", dataM.getSeconds())
console.log("Milisegundo", dataM.getMilliseconds())
console.log("Dia da semana", dataM.getDay()) // 0-Domingo | 6-Sábado

// Para saber a distância em ms da data inicial (Date(0) - 01/01/1970 00:00:00)
console.log(Date.now())

console.log(Date(1775588355653)) // Vai exibit a data e horário atual

// ---------------------------------------------------------------------------
// Também posso formatar a data para o formato brasileiro, usando o método (getDate) para pegar o dia, (getMonth) para pegar o mês e (getFullYear) para pegar o ano. Para os horários, uso (getHours), (getMinutes) e (getSeconds). Para deixar a formatação mais bonita, criei uma função que adiciona um zero à esquerda caso o número seja menor que 10.

function zeroEsquerda(zero){
    return zero >= 10 ? zero : `0${zero}`
}

function formatData(data){
    const dia = zeroEsquerda(dataBrasil.getDate())
    const mes = zeroEsquerda(dataBrasil.getMonth() + 1)
    const ano = zeroEsquerda(dataBrasil.getFullYear())
    const hora = zeroEsquerda(dataBrasil.getHours())
    const min = zeroEsquerda(dataBrasil.getMinutes())
    const seg = zeroEsquerda(dataBrasil.getSeconds())

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}


const data = new Date()
const dataBrasil = data
console.log(formatData(dataBrasil))